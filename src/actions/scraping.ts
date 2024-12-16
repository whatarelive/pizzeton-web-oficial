import axios from "axios";
import { load } from "cheerio";
import { defineAction } from "astro:actions";

const MONETISED = ['EUR', 'USD', 'MLC'];

export const getChange = defineAction({
    handler: async () => {
        const { data } = await axios.get('https://eltoque.com/precio-del-dolar-en-el-mercado-informal-en-cuba-hoy');
        const results: {[key: string]: number} = {};
    
        const $ = load(data);
    
        $('.price-cell').each((index, el) => {
            const item = $(el)
                .children('span').text()
                .replace('CUP', '').trim();
            
            results[MONETISED[index]] = +item;
        })
    
        return results;
    }
})