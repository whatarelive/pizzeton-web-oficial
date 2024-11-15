import type { Product, ProductNoSub, Event, TeamMember } from "@/interfaces";

export const team: TeamMember[] = [{
    img: "/Shape.png",
    name: "Elena Gómez",
    position: "Propietaria",
    bio: "Elena se encarga de crear una atmósfera acogedora y asegurarse de que cada cliente se sienta como en casa."
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
    subtitle: "Salsa de tomate, queso gouda, pesto",
    price: 715.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza Chorizo",
    subtitle: "Salsa de tomate, queso gouda, pesto y chorizo ahumado",
    price: 945.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Jamón",
    subtitle: "Salsa de tomate, queso gouda, pesto y jamón ahumado",
    price: 955.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Champiñones",
    subtitle: "Salsa de tomate, queso gouda, pesto, champiñones",
    price: 990.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Estrella",
    subtitle: "Salsa de tomate, queso gouda, pesto, jamón",
    price: 1050.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Atún",
    subtitle: "Salsa de tomate, queso gouda, pesto, atún",
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
    subtitle: "Salsa de tomate, queso gouda, pesto y lomo ahumado",
    price: 1370.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Jamón Serrano",
    subtitle: "Salsa de tomate, queso gouda, pesto y jamón serrano",
    price: 1415.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza Vegtariana",
    subtitle: "Salsa de tomate, queso gouda, pesto, cebolla, ají y aceitunas",
    price: 1470.00
},
{
    img: "/pizza.jpeg",
    title: "Pizza de Camarones",
    subtitle: "Salsa de tomate, queso gouda, pesto y camarones",
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

export const menu = {
    Pizzas: pizzas,
    Pastas: pastas,
    Bebidas: drinks,
    Postres: desserts,
}