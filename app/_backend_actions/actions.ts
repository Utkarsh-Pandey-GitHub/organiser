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
            expand:'friends'
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
            "name": user.fullName||user.username,
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
export async function getAllUsers(u:any) {
    console.log("fun callend");
    console.log(u);
    try {
        const params = new URLSearchParams({
            page: (1).toString(),
            perPage: (50).toString(),
            filter: `email!='${u.email}`
        });
        const result  =await (await fetch(`https://colony-draw.pockethost.io/api/collections/user/records/?${params.toString()}'`)).json()
        console.log(result.items)
        console.log(u?.expand?.friends.map((friend:any)=>friend.email))
        const ret= result.items.filter((email:any)=>!u?.expand?.friends?.map((friend:any)=>friend.email).includes(email)) as User[];
        console.log(result.items.filter((f:any)=>!u?.expand?.friends.map((friend:any)=>friend.email).includes(f.email)));
        return ret;
    } catch (error) {
        console.error('Error retrieving users:', error);
        return [];
    }
}
