export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  difficulty: "Facile" | "Moyen" | "Avancé";
  description: string;
  productUsed: string;
  image: string;
  ingredients: string[];
  steps?: string[];
}

export const recipes: Recipe[] = [
  {
    id: "tartelette-caramel-pecan",
    title: "Tartelettes Sablées au Caramel & Noix de Pécan",
    category: "Pâtisserie Fine",
    prepTime: "35 min",
    difficulty: "Moyen",
    description: "Une pâte sablée croustillante garnie d'un lit généreux de Crème Caramel TOFFIA et de noix de pécan caramélisées.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/images/recipes/tartelette-caramel.png",
    ingredients: [
      "250g de pâte sablée pur beurre",
      "200g de Crème Caramel TOFFIA",
      "100g de noix de pécan entières",
      "Une pincée de fleur de sel",
    ],
  },
  {
    id: "choux-creme-pistache",
    title: "Choux Craquelin à la Crème de Pistache",
    category: "Pâtisserie Professionnelle",
    prepTime: "45 min",
    difficulty: "Avancé",
    description: "Des choux aériens au craquelin doré, garnis d'une ganache onctueuse montée à la Crème de Pistache TOFFIA.",
    productUsed: "Crème de Pistache TOFFIA",
    image: "/images/recipes/choux-pistache.png",
    ingredients: [
      "12 choux avec craquelin doré",
      "250g de crème fouettée mascarpone",
      "150g de Crème de Pistache TOFFIA",
      "Éclats de pistaches grillées pour le décor",
    ],
  },
  {
    id: "moelleux-coeur-caramel",
    title: "Fondant Chocolat Noir & Cœur Coulant Caramel",
    category: "Dessert Gourmand",
    prepTime: "25 min",
    difficulty: "Facile",
    description: "Le classique réinventé avec un insert fondant de caramel TOFFIA qui s'échappe à la première bouchée.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/images/recipes/fondant-caramel.png",
    ingredients: [
      "200g de chocolat noir 70%",
      "120g de beurre doux",
      "3 œufs entiers",
      "6 généreuses cuillères de Crème Caramel TOFFIA",
    ],
  },
  {
    id: "entremets-miroir-caramel-noisette",
    title: "Entremets Miroir Caramel & Noisettes Torréfiées",
    category: "Pâtisserie de Fête",
    prepTime: "1h 15 min",
    difficulty: "Avancé",
    description: "Mousse légère aux noisettes, biscuit dacquoise et glaçage miroir ultra-brillant au caramel TOFFIA.",
    productUsed: "Nappage Miroir Caramel & Crème Noisettes",
    image: "/images/recipes/entremets-caramel.png",
    ingredients: [
      "Biscuit dacquoise noisette",
      "Mousse légère Crème de Noisettes TOFFIA",
      "150g de Nappage Miroir Caramel TOFFIA",
      "Noisettes du Piémont torréfiées",
    ],
  },
  {
    id: "gaufres-caramel-chaud",
    title: "Gaufres Liégeoises & Nappage Caramel Gourmand",
    category: "Street Gourmandise",
    prepTime: "20 min",
    difficulty: "Facile",
    description: "Gaufres caramélisées croustillantes, surmontées d'un filet généreux de caramel chaud TOFFIA.",
    productUsed: "Caramel Liquide TOFFIA",
    image: "/images/recipes/gaufres-caramel.png",
    ingredients: [
      "4 gaufres liégeoises chaudes",
      "Nappage caramel TOFFIA tiédi",
      "Chantilly maison vanillée",
    ],
  },
];
