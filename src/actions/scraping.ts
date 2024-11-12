import axios from "axios";
import { load } from "cheerio";

const monedas = ['EUR', 'USD', 'MLC'];

export async function scraping() {
    const { data } = await axios.get('https://eltoque.com/precio-del-dolar-en-el-mercado-informal-en-cuba-hoy');
    const results: {[key: string]: number} = {};

    const $ = load(data);
    
    $('.price-cell').each((index, el) => {
        const item = $(el)
            .children('span').text()
            .replace('CUP', '').trim();
       
        results[monedas[index]] = +item;        
    })

    return results;
}