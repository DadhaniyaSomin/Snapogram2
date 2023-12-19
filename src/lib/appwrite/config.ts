// Importing necessary modules from the 'appwrite' library
import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// Configuration object for Appwrite
export const appWriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // Appwrite project ID
    url: import.meta.env.VITE_APPWRITE_URL, // Appwrite API URL
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
