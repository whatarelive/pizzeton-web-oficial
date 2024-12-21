import { isAxiosError } from "axios";
import { authStore } from "@/store/store";
import pizzetonApi from "@/api/pizzetonApi";
import type { UserFromRequest } from "@/interfaces";

export async function postRequest(url: string, body: any) {
    try {
        const { data, status } = await pizzetonApi.post<UserFromRequest>(url, {...body});
        
        if (status !== 200 || 201) throw new Error("Failed fecth.");

        const { name, isBaned, token } = data;

        authStore.set({ 
            session: {
                name, isBaned, token
            },
        });
        
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response!.data;
        }
    }
}