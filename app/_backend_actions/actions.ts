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
            filter: `email='${email}'`
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
        const data = {
            "id": user.id.slice(17),
            "email": user.primaryEmailAddress?.emailAddress,
            "name": user.fullName
        };
        const result = await pb.collection('user').create(data);

        return result as User;  // Cast to User type
    } catch (error) {
        console.error('Error creating user:', error);
        return undefined;
    }
}

