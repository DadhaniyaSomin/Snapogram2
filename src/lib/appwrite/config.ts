// Importing necessary modules from the 'appwrite' library
import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// Configuration object for Appwrite
export const appWriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // Appwrite project ID
    url: import.meta.env.VITE_APPWRITE_URL, // Appwrite API URL
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID, // Appwrite database API URL
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID, // Appwrite storage API URL
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION, // Appwrite user collection API URL
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION, // Appwrite saves collection API URL
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION, // Appwrite post collection API URL
}

// Creating an instance of the Appwrite Client
export const client = new Client();

// Setting the Appwrite project ID and API endpoint using the configuration
client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);

// Creating instances of Appwrite services for different functionalities
export const account = new Account(client); // Account service for user-related operations
export const database = new Databases(client); // Database service for database-related operations
export const storage = new Storage(client); // Storage service for file-related operations
export const avatar = new Avatars(client); // Avatar service for avatar-related operations
