// Import necessary types and modules
import { INewUser } from "@/types";
import { ID } from 'appwrite'
import { account, appWriteConfig, avatar, database } from "./config";

/**
 * Creates a new user account with the provided information.
 * @param user - User information (INewUser).
 * @returns The newly created user.
 */
export async function createUserAccount(user: INewUser) {
    try {
        // Create a new account using Appwrite service
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.username
        );

        // Check if the account creation was successful
        if (!newAccount) {
            throw new Error("Something went wrong while creating a new account");
        }

        // Generate avatar URL using initials from the user's name
        const avatarUrl = avatar.getInitials(user.name);

        // Save user information to the database
        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl
        });

        // Return the newly created user
        return newUser;
    } catch (error) {
        // Handle any errors that occurred during the process
        console.log(error);
        return error;
    }
}

/**
 * Saves user information to the database.
 * @param user - User information to be saved.
 * @returns The newly saved user information.
 */
export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}) {
    try {
        // Create a new document in the database with the user information
        const newUser = await database.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        // Return the newly saved user information
        return newUser;
    } catch (error) {
        // Handle any errors that occurred during the database operation
        console.log(error);
    }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}