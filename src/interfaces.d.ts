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
    userName: string;
    valoration: number;
    opinion: string;
}

export interface AgregationsStore {
    agregations?: Omit<Agregation, 'id'>[];
}

export interface MenuStore {
    categories: { tab: string, men: Product[] }[]
}

export interface AuthStore {
    session: {
        name: string;
        isBaned: boolean;
        token: string;
        date: number
    } | null;
}

export interface EventFromRequest extends Omit<Product, 'price'> {
    imgId: string;
    active: boolean;
}

export interface UserFromRequest {
    name: string;
    email: string;
    role: UserRole;
    isBaned: boolean;
    token: string;
}

export interface OpinionFromRequest {
    user: {
        name: string;
    },
    date: Date;
    opinion: string;
    valoration: number;
}

type UserRole = 'user' | 'dev' | 'admin' 

export type ProductNoSub = Omit<Product, 'subtitle'>
export type Event = Omit<Product, 'price'>;
export type Menu = 'Pizzas' | 'Pastas' | 'Bebidas' | 'Postres';