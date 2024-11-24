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

export interface Opinion {
    userName: string;
    valoration: number;
    opinion: string;
}

interface MenuProduct extends ProductNoSub {
    subtitle?: string;
}

export type ProductNoSub = Omit<Product, 'subtitle'>
export type Event = Omit<Product, 'price'>;
export type Menu = 'Pizzas' | 'Pastas' | 'Bebidas' | 'Postres';