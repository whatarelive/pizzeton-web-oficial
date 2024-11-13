export interface Product {
    img: string;
    title: string;
    subtitle: string;
    price: number;
}

export interface TeamMember {
    img: string;
    name: string;
    position: string;
    bio: string;
}

export type ProductNoSub = Omit<Product, 'subtitle'>
export type Event = Omit<Product, 'price'>;