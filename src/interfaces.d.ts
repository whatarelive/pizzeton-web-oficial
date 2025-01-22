export interface Product {
    imgUrl: string;
    title: string;
    subtitle: string;
    price: number;
}

export interface Prominent {
    id: string;
    product: Product
}

export interface Agregation 
    extends Pick<Product, 'title' | 'price'>, Pick<Prominent, 'id'> {}

export interface TeamMember {
    img: string;
    name: string;
    position: string;
}

export interface Opinion {
    user: string;
    valoration: number;
    opinion: string;
}

export interface AgregationsStore {
    agregations?: Omit<Agregation, 'id'>[];
}

export interface MenuStore {
    categories: { tab: string, men: Product[] }[]
}

export interface EventFromRequest extends Omit<Product, 'price'> {
    imgId: string;
    active: boolean;
}

export interface OpinionFromRequest {
    user: string;
    date: Date;
    opinion: string;
    valoration: number;
}

export type ProductNoSub = Omit<Product, 'subtitle'>
export type Event = Omit<Product, 'price'>;
export type Menu = 'Pizzas' | 'Pastas' | 'Bebidas' | 'Postres';