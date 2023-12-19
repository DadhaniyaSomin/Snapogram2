// Importing the 'zod' library and aliasing it as 'z'
import * as z from 'zod';

// Validation schema for sign-up data
export const SignUpValidation = z.object({
    // Validation for the 'name' field
    name: z.string().min(2, { message: "Name is too short (minimum 2 characters)" }),

    // Validation for the 'username' field
    username: z.string().min(2, { message: "Username is too short (minimum 2 characters)" }),

    // Validation for the 'email' field
    email: z.string().email({ message: "Invalid email address" }),

    // Validation for the 'password' field
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});
