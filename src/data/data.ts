import type { TeamMember } from "@/interfaces";

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

export const events = [{
    imgUrl: "/cumple.jpg",
    title: "Cumpleaños Especial",
    subtitle: "Celebra tu cumpleaños con nosotros y recibe sorpresas"
},
{
    imgUrl: "/circo.jpg",
    title: "Espectaculos de Circo",
    subtitle: "Disfruta con tu familia y amigos de un magnifico momento."
}];

export const aggregations = [
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