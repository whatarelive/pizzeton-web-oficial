import { defineAction } from "astro:actions";
import { isAxiosError } from "axios";
import { opinionSchema } from "@/actions/validations/schemas";
import { authStore } from "@/store/store";
import pizzetonApi from "@/api/pizzetonApi";
import { getRequest } from "./helpers/getRequest";
import type { OpinionFromRequest } from "@/interfaces";

export const createOpinion = defineAction({
    accept: 'form',
    input: opinionSchema,
    handler: async ({ valoration, opinion }) => {
        try {
            const { session } = authStore.get();
            const date = new Date();
            
            await pizzetonApi.post('/opinions', 
                {
                    valoration, 
                    opinion,
                    date,
                }, 
                {
                    headers: { 
                        Authorization: `Bearer ${session?.token}`,
                    }
                }
            );
            
        } catch (error) {
            if (isAxiosError(error)) {
                return error.response?.data;
            }
        }
    }
});

export const getLastOpinions = defineAction({
    handler: async () => {
        return await getRequest<OpinionFromRequest>('/opinions');
    }
})