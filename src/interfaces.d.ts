export interface Product {
    img: string;
    title: string;
    subtitle: string;
    price: number;
}

export type Event = Omit<Product, 'price'>;