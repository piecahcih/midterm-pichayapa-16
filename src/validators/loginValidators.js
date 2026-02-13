import z from "zod";

export const loginValidators = z.object({
    username: z.string().min(4,"Invalid username, must be atleast 4 characters"),
    password: z.string().min(6,"password must be at least 6 characters")
})