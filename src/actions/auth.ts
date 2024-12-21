import { defineAction } from "astro:actions";
import { authStore } from "@/store/store";
import { postRequest } from "@/actions/helpers/postRequest";
import { loginSchema, registerSchema } from "@/actions/validations/schemas";

export const singIn = defineAction({
    accept: 'form',
    input: loginSchema,
    handler: async ({ email, password }) => {
        return await postRequest('auth/login', { email, password });
    }
});

export const register = defineAction({
    accept: 'form',
    input: registerSchema,
    handler: async ({ name, email, password }) => {
        return await postRequest('auth/register', { name, email, password });
    }
});

export const logOut = defineAction({
    handler: async () => {
        authStore.set({ session: null });
    }
});