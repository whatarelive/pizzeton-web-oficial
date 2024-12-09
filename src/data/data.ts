import type { Product, ProductNoSub, Event, TeamMember } from "@/interfaces";

export const team: TeamMember[] = [{
    img: "/Shape.png",
    name: "Elena Gómez",
    position: "Propietaria",
    bio: "Elena se encarga de crear una atmósfera acogedora y asegurarse de que cada cliente se sienta como en su casa y disfrute la experiencia."
},
{
    img: "/Shape.png",
    name: "Carlos Rodríguez",
    position: "Propietario",
    bio: "Con más de 20 años de experiencia en la industria restaurantera, Carlos trae su pasión por la comida italiana a cada aspecto del negocio."
},
{
    img: "/Shape.png",
    name: "Marco Bianchi",
    position: "Chef Principal",
    bio: "Formado en Italia, Marco combina técnicas tradicionales con innovación culinaria para crear nuestras deliciosas pizzas."
}];

export const events: Event[] = [{
    img: "/cumple.jpg",
    title: "Cumpleaños Especial",
    subtitle: "Celebra tu cumpleaños con nosotros y recibe sorpresas"
},
{
    img: "/circo.jpg",
    title: "Espectaculos de Circo",
    subtitle: "Disfruta con tu familia y amigos de un magnifico momento."
}];

export const pizzas: Product[] = [{
    img: "/pizza.jpeg",
    title: "Pizza Napolitana",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca)",
    price: 715.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza Chorizo",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca) y chorizo ahumado",
    price: 945.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Jamón",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca) y jamón ahumado",
    price: 955.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Champiñones",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca), champiñones",
    price: 990.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Estrella",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca), jamón",
    price: 1050.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Atún",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca), atún",
    price: 1210.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Hawaiana",
    subtitle: "Salsa de tomate, queso gouda, piña caramelizada y jamón",
    price: 1225.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Lomo Ahumado",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca) y lomo ahumado",
    price: 1370.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Jamón Serrano",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca) y jamón serrano",
    price: 1415.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza Vegtariana",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca), cebolla, ají y aceitunas",
    price: 1470.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Camarones",
    subtitle: "Salsa de tomate, queso gouda, pesto (aceite de ajo, perejil y albahaca) y camarones",
    price: 1695.00
}];

export const pastas: Product[] = [{
    img: "/pizza.jpeg",
    title: "Espagueti Napolitano",
    subtitle: "Salsa de tomate, queso gouda y spagueti",
    price: 1182.00
},
{
    img: "/pizza.jpeg",
    title: "Cannelones",
    subtitle: "Salsa de tomate, queso gouda y jamón",
    price: 1400.00
},
{
    img: "/pizza.jpeg",
    title: "Lasaña Boloñesa",
    subtitle: "Salsa de tomate y picadillo",
    price: 1500.00
},
{
    img: "/pizza.jpeg",
    title: "Lasaña de Jamón",
    subtitle: "Salsa de tomate y jamón",
    price: 1700.00
}];

export const drinks: ProductNoSub[] = [{
    img: "/refresco.jpg",
    title: "Malteada",
    price: 567.00
},
{
    img: "/refresco.jpg",
    title: "Refresco Naranja",
    price: 250.00
},
{
    img: "/refresco.jpg",
    title: "Refresco Limón",
    price: 290.00
},
{
    img: "/refresco.jpg",
    title: "Coca Cola",
    price: 290.00
},
{
    img: "/refresco.jpg",
    title: "Refresco Energizante",
    price: 300.00
},
{
    img: "/refresco.jpg",
    title: "Malta Importada",
    price: 300.00
},
{
    img: "/refresco.jpg",
    title: "Malta Nacional",
    price: 330.00
},
{
    img: "/refresco.jpg",
    title: "Cerveza Importada",
    price: 190.00
},
{
    img: "/refresco.jpg",
    title: "Cerveza Nacional",
    price: 300.00
}];

export const desserts: ProductNoSub[] = [{
    img: "/refresco.jpg",
    title: "Focaccia de Nutela",
    price: 1080.00
},
{
    img: "/refresco.jpg",
    title: "Copa de Helado",
    price: 452.00
},
{
    img: "/refresco.jpg",
    title: "Canoa de Helado",
    price: 652.00
}];

export const aggregations: Omit<ProductNoSub, 'img'>[] = [
    { 
        title: 'Doble Queso Gouda',
        price: 480,
    },
    { 
        title: 'Cebolla',
        price: 250,
    },
    { 
        title: 'Ajipimiento',
        price: 250,
    },
    { 
        title: 'Chorizo Ahumado',
        price: 230,
    },
    { 
        title: 'Jamón Ahumado',
        price: 240,
    },
    { 
        title: 'Aceitunas',
        price: 255,
    },
    { 
        title: 'Piña Caramelizada',
        price: 270,
    },
    { 
        title: 'Champiñones',
        price: 275,
    },
    { 
        title: 'Atún',
        price: 495,
    },
    { 
        title: 'Lomo Ahumado',
        price: 655,
    },
    { 
        title: 'Jamón Serrano',
        price: 700,
    },
    { 
        title: 'Camarones',
        price: 980,
    },
];

export const menu = {
    Pizzas: pizzas,
    Agregos: aggregations,
    Pastas: pastas,
    Bebidas: drinks,
    Postres: desserts,
}

export const especialities = [{
    img: '/pizza2.jpeg',
    title: 'Pizza Estrella',
    description: 'Disfruta de nuestra exclusiva pizza en forma de estrella de seis puntas, cada una rellena con cremoso queso Gouda y delicioso jamón. Un manjar único que combina la frescura de la pasta de tomate con un toque especial de pesto hecho con aceite de ajo, perejil y albahaca. ¡Un sabor innovador que no podrás resistir!'
},
{
    img: '/pizza.jpeg',
    title: 'Pizza Vegetariana',
    description: 'Nuestra Pizza Vegetariana es un homenaje a la tradición italiana. Con una base de salsa de tomate San Marzano, mozzarella fresca de búfala, hojas de albahaca recién cortadas y un chorrito de aceite de oliva extra virgen. La simplicidad en su máxima expresión.'
},
{
    img: '/pizza3.jpeg',
    title: 'Foacacia de Nutela',
    description: 'Nuestra Foacacia de Nutela es un homenaje a la tradición italiana. Con una base de salsa de tomate San Marzano, mozzarella fresca de búfala, hojas de albahaca recién cortadas y un chorrito de aceite de oliva extra virgen. La simplicidad en su máxima expresión.'
}];

export const ubicationViewData = [{
    label: "Como llegar:",
    description: "Estamos ubicados en el corazón de la ciudad, fácilmente accesible por transporte público y con estacionamiento disponible."
},
{
    label: "Dirección:",
    description: "Calle Principal 123, Ciudad"
},
{
    label: "Teléfono:",
    description: "+53 53635566"
},
{
    label: "Horario:",
    description: "Abierto todos los días: 11:00 - 22:00"
}];