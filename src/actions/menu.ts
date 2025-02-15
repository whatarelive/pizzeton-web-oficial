import { defineAction } from "astro:actions";
import { getRequest } from "@/actions/helpers/getRequest";
import { menuSchema } from "@/actions/validations/schemas";
import type { Agregation, Product, Prominent } from "@/interfaces";

export const getMenu = defineAction({
    input: menuSchema,
    handler: async ({ category }) => {
        return await getRequest<Product>(`products?category=${category}&field=price&order=asc&stock=${true}`);
    }
})

export const getProminentPizzas = defineAction({
    handler: async () => {
        const data = await getRequest<Prominent>('product/prominents?limit=4') as Prominent[];
        
        return data.map(({ product }) => {
            return product
        });
    }
})

export const getAgregations = defineAction({
    handler: async () => {
        const data = await getRequest<Agregation>('product/agregations') as Agregation[];

        return data.map(({ title, price }) => {
            return { title, price };
        });        
    }
});