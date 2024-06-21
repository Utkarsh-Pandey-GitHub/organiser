import PocketBase, { RecordModel } from 'pocketbase';

// Initialize PocketBase client
const pb = new PocketBase('https://colony-draw.pockethost.io/');

// Define the user type based on your schema
interface User extends RecordModel {
    email: string;
    [key: string]: any;  // Add other fields as needed
}

// Function to retrieve user by email
export async function getUserByEmail(email: string): Promise<User | undefined> {
    try {
        // Query users collection with filter
        const result = await pb.collection('user').getList(1, 1, {
            filter: `email='${email}'`,
            expand: 'friends,friend_requests,pending_friend_request_response'
        });

        // Ensure items array is not empty
        if (result.items.length > 0) {

            return result.items[0] as User;  // Cast to User type
        } else {

            return undefined;
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        return undefined;
    }
}

export async function getUserById(id: string): Promise<User | undefined> {
    try {
        // Query users collection with filter
        const result = await pb.collection('users').getList(1, 1, {
            filter: `id='${id}'`
        });

        // Ensure items array is not empty
        if (result.items.length > 0) {
            return result.items[0] as User;  // Cast to User type
        } else {
            return undefined;
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        return undefined;
    }
}

// Function to create a new user
export async function createUser(user: any) {
    try {
        // Create a new user record
        const u = await getUserByEmail(user.primaryEmailAddress.emailAddress);
        const data = {
            "id": user.id.slice(17),
            "email": user.primaryEmailAddress?.emailAddress,
            "name": user.fullName || user.username,
            "dp_link": user.imageUrl,
        };
        if (u) {
            return u;
        }
        const result = await pb.collection('user').create(data);

        return result as User;  // Cast to User type
    } catch (error) {

        console.error('Error creating user:', error);
        return undefined;
    }
}


//Fetch all users
export async function getAllUsers(u: any) {
    console.log("fun callend");
    console.log(u);
    try {
        const params = new URLSearchParams({
            page: (1).toString(),
            perPage: (50).toString(),
            filter: `email!='${u.email}`
        });
        const result = await (await fetch(`https://colony-draw.pockethost.io/api/collections/user/records/?${params.toString()}'`)).json()
        console.log(result.items)
        console.log(u?.expand?.friends.map((friend: any) => friend.email))
        const ret = result.items.filter((email: any) => !u?.expand?.friends?.map((friend: any) => friend.email).includes(email)) as User[];
        console.log(result.items.filter((f: any) => !u?.expand?.friends.map((friend: any) => friend.email).includes(f.email)));
        return ret;
    } catch (error) {
        console.error('Error retrieving users:', error);
        return [];
    }
}


// create or fetch chats


export async function createChat(user1: User, user2: User) {
    try {
        // get preexisting chat
        const result = await pb.collection('chat').getList(1, 10, {
            filter: `members=[${user1.id},${user2.id}] OR members=[${user2.id},${user1.id}]`,
        });
        if (result.items.length > 0) {
            return result.items[0] as User;  // Cast to User type
        }
        else {
            const result = await pb.collection('chat').create({
                "users": [user1, user2]
            });
            return result as User;  // Cast to User type
        }
    } catch (error) {
        console.error('Error creating chat:', error);
        return undefined;
    }
}


// friend request sendings
export async function sendFriendRequest(user1: User, user2: User) {
    try {
        const sendFriendRequest = await pb.collection('user').update(user1.id, {
            "friend_requests": [
                ...user1.friend_requests,
                user2.id
            ]
        });
        const createPendingFriendRequest = await pb.collection('user').update(user2.id, {
            "pending_friend_request_response": [
                ...user2.pending_friend_request_response,
                user1.id
            ]
        });

    }
    catch (error) {
        console.error('Error sending friend request:', error);
        return undefined;
    }
}

//accept friend request
export async function acceptFriendRequest(user1: User, user2: User) {
    try {
        const acceptFriendRequest = await pb.collection('user').update(user1.id, {
            "friends": [
                ...user1.friends,
                user2.id
            ],
            "friend_requests": user1.friend_requests.filter((id: string) => id !== user2.id)
        });
        const acceptPendingFriendRequest = await pb.collection('user').update(user2.id, {
            "friends": [
                ...user2.friends,
                user1.id
            ],
            "pending_friend_request_response": user2.pending_friend_request_response.filter((id: string) => id !== user1.id)
        });
    }
    catch (error) {
        console.error('Error accepting friend request:', error);
        return undefined;

    }
}
//reject friend request or cancel friend request
export async function rejectFriendRequest(user1: User, user2: User) {
    try {
        const rejectFriendRequest = await pb.collection('user').update(user1.id, {
            "friend_requests": user1.friend_requests.filter((id: string) => id !== user2.id)
        });
        const rejectPendingFriendRequest = await pb.collection('user').update(user2.id, {
            "pending_friend_request_response": user2.pending_friend_request_response.filter((id: string) => id !== user1.id)
        });
    }
    catch (error) {
        console.error('Error rejecting friend request:', error);
        return undefined;
    }
}


//save the profile
export async function saveProfile(user: User) {
    try {
        const result = await pb.collection('user').update(user.id, user);
        return result as User;  // Cast to User type
    } catch (error) {
        console.error('Error saving profile:', error);
        return undefined;
    }
}

export async function getUrl(filename: any, user: any) {
    console.log("fileurl called");
    console.log(filename);

    // returns something like:
    // http://127.0.0.1:8090/api/files/example/kfzjt5oy8r34hvn/test_52iWbGinWd.png?thumb=100x250
    const url = pb.files.getUrl(user, filename, { 'thumb': '100x250' });
    console.log(url);
    return url;
}
