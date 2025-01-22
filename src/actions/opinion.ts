import { defineAction } from "astro:actions";
import { isAxiosError } from "axios";
import { opinionSchema } from "@/actions/validations/schemas";
import pizzetonApi from "@/api/pizzetonApi";
import { getRequest } from "./helpers/getRequest";
import type { OpinionFromRequest } from "@/interfaces";

export const createOpinion = defineAction({
    accept: 'form',
    input: opinionSchema,
    handler: async ({ user, valoration, opinion }) => {
        try {
            await pizzetonApi.post('/opinions', 
                {
                    user,
                    valoration, 
                    opinion,
                    date: new Date(),
                },
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