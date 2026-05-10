import { Product, Review } from './types';

export const PIZZAS: Product[] = [
  {
    id: 'p1',
    name: 'Pizza Margherita',
    description: {
      es: 'Tomate, mozzarella y albahaca.',
      en: 'Tomato, mozzarella, basil.',
      it: 'Pomodoro, mozzarella e basilico.'
    },
    price: 7.00,
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a30536?auto=format&fit=crop&q=80&w=800',
    popular: true,
    category: 'pizza'
  },
  {
    id: 'p2',
    name: 'Pizza York',
    description: {
      es: 'Tomate, mozzarella, york.',
      en: 'Tomato, mozzarella, ham.',
      it: 'Pomodoro, mozzarella, prosciutto cotto.'
    },
    price: 8.00,
    imageUrl: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p3',
    name: 'Pizza Marinara',
    description: {
      es: 'Tomate, ajo y orégano.',
      en: 'Tomato, garlic and oregano.',
      it: 'Pomodoro, aglio e origano.'
    },
    price: 6.00,
    imageUrl: 'https://images.unsplash.com/photo-1542289657-3f3640242a4d?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p4',
    name: 'Pizza Jamón y Setas',
    description: {
      es: 'Tomate, mozzarella, jamón y mixto de setas.',
      en: 'Tomato, mozzarella, ham and mushrooms.',
      it: 'Pomodoro, mozzarella, prosciutto cotto e funghi misti.'
    },
    price: 9.00,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    popular: true,
    category: 'pizza'
  },
  {
    id: 'p5',
    name: 'Pizza Wurstel y Papas Fritas',
    description: {
      es: 'Tomate, mozzarella, frankfurt y papas fritas.',
      en: 'Tomato, mozzarella, frankfurt sausage and french fries.',
      it: 'Pomodoro, mozzarella, wurstel e patatine fritte.'
    },
    price: 10.00,
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p6',
    name: 'Pizza Hawai',
    description: {
      es: 'Tomate, mozzarella, york y piña.',
      en: 'Tomato, mozzarella, ham and pineapple.',
      it: 'Pomodoro, mozzarella, prosciutto cotto e ananas.'
    },
    price: 9.00,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p7',
    name: 'Pizza Atún y Cebolla',
    description: {
      es: 'Tomate, mozzarella, atún y cebolla.',
      en: 'Tomato, mozzarella, tuna and onion.',
      it: 'Pomodoro, mozzarella, tonno e cipolla.'
    },
    price: 8.00,
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p8',
    name: 'Pizza Diavola',
    description: {
      es: 'Tomate, mozzarella y salami picante.',
      en: 'Tomato, mozzarella and pepperoni.',
      it: 'Pomodoro, mozzarella e salame piccante.'
    },
    price: 8.00,
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    popular: true,
    category: 'pizza'
  },
  {
    id: 'p9',
    name: 'Pizza Golden',
    description: {
      es: 'Tomate, rúcula, jamón serrano, parmesano y mozzarella de bufala.',
      en: 'Tomato, rocket lettuce, serrano ham, parmesan cheese and buffalo mozzarella.',
      it: 'Pomodoro, rucola, prosciutto crudo, parmigiano e mozzarella di bufala.'
    },
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p10',
    name: 'Pizza Carbonara',
    description: {
      es: 'Mozzarella, guanciale, huevos, parmesano y pimienta negra.',
      en: 'Mozzarella, guanciale, eggs, parmesan cheese and black pepper.',
      it: 'Mozzarella, guanciale, uova, parmigiano e pepe nero.'
    },
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p11',
    name: 'Pizza Vegetariana',
    description: {
      es: 'Tomate, mozzarella y verduras mixtas.',
      en: 'Tomato, mozzarella and mixed vegetable.',
      it: 'Pomodoro, mozzarella e verdure miste.'
    },
    price: 10.00,
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  },
  {
    id: 'p12',
    name: 'Pizza Quattro Formaggi',
    description: {
      es: 'Mozzarella, queso azul, queso ahumado y parmesano.',
      en: 'Mozzarella, gorgonzola cheese, smoked cheese and parmesan.',
      it: 'Mozzarella, gorgonzola, formaggio affumicato e parmigiano.'
    },
    price: 11.00,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    popular: true,
    category: 'pizza'
  },
  {
    id: 'p13',
    name: 'Pizza Hellvis',
    description: {
      es: 'Mozzarella, rúcula, pollo frito, tomate cherry y mostaza y miel.',
      en: 'Mozzarella, fried chicken, rocket lettuce, tomato cherry and honey mustard.',
      it: 'Mozzarella, rucola, pollo fritto, pomodorini ciliegino e senape al miele.'
    },
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    category: 'pizza'
  }
];

export const COMBOS: Product[] = [
  {
    id: 'c1',
    name: 'Combo Pareja',
    description: {
      es: '1 Pizza Mediana + 2 Bebidas + 1 Ración de Pan de Ajo.',
      en: '1 Medium Pizza + 2 Drinks + 1 Garlic Bread Portion.',
      it: '1 Pizza Media + 2 Bevande + 1 Porzione di Pane all\'Aglio.'
    },
    price: 22.99,
    imageUrl: 'https://images.unsplash.com/photo-1627485937980-221c88ce04ea?auto=format&fit=crop&q=80&w=800',
    category: 'combo'
  },
  {
    id: 'c2',
    name: 'Combo Familiar',
    description: {
      es: '2 Pizzas Familiares + 4 Bebidas + Alitas de Pollo.',
      en: '2 Family Pizzas + 4 Drinks + Chicken Wings.',
      it: '2 Pizze Familiari + 4 Bevande + Ali di Pollo.'
    },
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    popular: true,
    category: 'combo'
  },
  {
    id: 'c3',
    name: 'Combo Fiesta',
    description: {
      es: '3 Pizzas Familiares + 2 Litros de Refresco + 2 Postres.',
      en: '3 Family Pizzas + 2 Liters of Soda + 2 Desserts.',
      it: '3 Pizze Familiari + 2 Litri di Bibita + 2 Dessert.'
    },
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d5d8ff681da2?auto=format&fit=crop&q=80&w=800',
    category: 'combo'
  }
];

export const REVIEWS: Review[] = [
  {
    "id": "r1",
    "authorName": "Lina Oliveira",
    "rating": 5,
    "text": "¡Todo excelente! Muy recomendable. Buena pizza, buena hamburguesa, y lo mejor el trato excelente, Francesco un trabajador muy amable. El mejor sitio en el que hemos estado en la zona de Puerto Santiago.",
    "time": "Hace 2 meses",
    "profilePhotoUrl": "https://ui-avatars.com/api/?name=Lina+Oliveira&background=3F6212&color=fff"
  },
  {
    "id": "r2",
    "authorName": "Angela Aranega",
    "rating": 5,
    "text": "¡Si quieres comer una auténtica pizza italiana, tienes que probarla! Masa fina, buenos ingredientes y ellos muy amables en el trato.",
    "time": "Hace 2 meses",
    "profilePhotoUrl": "https://ui-avatars.com/api/?name=Angela+Aranega&background=C2410C&color=fff"
  },
  {
    "id": "r3",
    "authorName": "NSR 75cc",
    "rating": 5,
    "text": "La masa de pizza increíblemente buena, el tomate riquísimo, la carbonara espectacular con su huevo y su guanchale, todos los ingredientes súper frescos y de calidad. El personal muy agradable. Muy bien de precio. Me ha sorprendido para bien.",
    "time": "Hace 9 meses",
    "profilePhotoUrl": "https://ui-avatars.com/api/?name=NSR+75cc&background=3F6212&color=fff"
  },
  {
    "id": "r4",
    "authorName": "Enza Bari",
    "rating": 5,
    "text": "¡Una pizza casera riquísima! Ingredientes frescos, y la masa una delicia. El servicio óptimo y súper rápido. Es de recomendación absoluta hasta por los precios. ¡Le doy un 10! 😍",
    "time": "Hace 2 años",
    "profilePhotoUrl": "https://ui-avatars.com/api/?name=Enza+Bari&background=C2410C&color=fff"
  },
  {
    "id": "r5",
    "authorName": "Laurys La Rosa",
    "rating": 5,
    "text": "Me encantó este lugar, fui con mi hijo a darnos un gusto y fue la mejor decisión, la mejor pizza que hemos probado, la atención de la camarera Rita fue excelente, quizás volvamos este mismo fin de semana, muy recomendado.",
    "time": "Hace 2 años",
    "profilePhotoUrl": "https://ui-avatars.com/api/?name=Laurys+La+Rosa&background=3F6212&color=fff"
  }
];
