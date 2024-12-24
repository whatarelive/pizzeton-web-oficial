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

export const checkToken = defineAction({
    handler: async () => {
        const { session } = authStore.get();
        if (!session) return null;

        // Calculo para comprobar el tiempo de vida del jwt.
        const timeNow = new Date().getTime();
        const tokenLifeTime = 12 * 60 * 60 * 1000; // 12 horas en milisegundos
        const isValid = (timeNow - session.date) < tokenLifeTime;

        if (!isValid) {
            authStore.set({ session: null });
            return null;
        } 
            
        return session;
    }
});
