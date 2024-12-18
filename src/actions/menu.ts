import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import getRequest from "./helpers/getRequest";
import type { Agregation, Product, Prominent } from "@/interfaces";

const MenuSchema = z.object({
    category: z.string()
});

export const getMenu = defineAction({
    input: MenuSchema,
    handler: async ({ category }) => {
        return await getRequest<Product>(`products/${category}`);
    }
})

export const getProminentPizzas = defineAction({
    handler: async () => {
        const data = await getRequest<Prominent>('product/prominents?limit=4');
        
        return data.map(({ product }) => {
            return product
        });
    }
})

export const getAgregations = defineAction({
    handler: async () => {
        const data = await getRequest<Agregation>('product/agregations');

        return data.map(({ title, price }) => {
            return { title, price };
        });        
    }
});