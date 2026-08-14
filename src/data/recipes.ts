export interface Recipe {
  id: string;
  title: string;
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
    prepTime: "35 min",
    difficulty: "Moyen",
    description: "Une pâte sablée croustillante garnie d'un lit généreux de Crème Caramel TOFFIA et de noix de pécan caramélisées.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/caramel2.png",
    ingredients: [
      "250g de pâte sablée pur beurre",
      "200g de Crème Caramel TOFFIA",
      "100g de noix de pécan entières torréfiées",
      "Une pincée de fleur de sel",
    ],
  },
  {
    id: "choux-creme-pistache",
    title: "Choux Craquelin à la Crème de Pistache",
    prepTime: "45 min",
    difficulty: "Avancé",
    description: "Des choux aériens au craquelin doré, garnis d'une ganache onctueuse montée à la Crème de Pistache TOFFIA.",
    productUsed: "Crème de Pistache TOFFIA",
    image: "/caramel4.png",
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
    prepTime: "25 min",
    difficulty: "Facile",
    description: "Le classique réinventé avec un insert fondant de caramel TOFFIA qui s'échappe à la première bouchée.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/caramel3.png",
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
    prepTime: "1h 15 min",
    difficulty: "Avancé",
    description: "Mousse légère aux noisettes, biscuit dacquoise et glaçage miroir ultra-brillant au caramel TOFFIA.",
    productUsed: "Nappage Miroir Caramel & Crème Noisettes",
    image: "/caramel1.png",
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
    prepTime: "20 min",
    difficulty: "Facile",
    description: "Gaufres caramélisées croustillantes, surmontées d'un filet généreux de caramel chaud TOFFIA.",
    productUsed: "Caramel Liquide TOFFIA",
    image: "/caramel2.png",
    ingredients: [
      "4 gaufres liégeoises croustillantes",
      "Nappage caramel TOFFIA tiédi",
      "Chantilly maison vanillée",
    ],
  },
  {
    id: "cookie-coeur-cacahuete",
    title: "Cookies Gourmands Cœur Beurre de Cacahuètes",
    prepTime: "30 min",
    difficulty: "Facile",
    description: "Cookies crousti-fondants avec un insert crémeux au Beurre de Cacahuètes TOFFIA et éclats de caramel mou.",
    productUsed: "Beurre de Cacahuètes TOFFIA",
    image: "/caramel3.png",
    ingredients: [
      "200g de pâte à cookie pur beurre",
      "150g de Beurre de Cacahuètes TOFFIA",
      "Éclats de caramel mou et chocolat noir",
    ],
  },
  // ── 6 new recipes below ──
  {
    id: "cheesecake-caramel-beurre-sale",
    title: "Cheesecake au Caramel Beurre Salé",
    prepTime: "50 min",
    difficulty: "Moyen",
    description: "Un cheesecake crémeux sur base de spéculoos, nappé d'un voile doré de Crème Caramel TOFFIA au beurre salé.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/caramel1.png",
    ingredients: [
      "300g de cream cheese",
      "150g de spéculoos écrasés",
      "80g de beurre demi-sel fondu",
      "200g de Crème Caramel TOFFIA",
      "2 œufs entiers",
    ],
  },
  {
    id: "brownies-fondants-caramel",
    title: "Brownies Fondants Marbré Caramel",
    prepTime: "35 min",
    difficulty: "Facile",
    description: "Des brownies ultra-fondants traversés de veines de caramel TOFFIA et parsemés de fleur de sel.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/caramel4.png",
    ingredients: [
      "200g de chocolat noir 65%",
      "150g de beurre doux",
      "3 œufs",
      "120g de sucre",
      "100g de Crème Caramel TOFFIA",
    ],
  },
  {
    id: "crepes-gourmandes-pistache",
    title: "Crêpes Gourmandes à la Crème de Pistache",
    prepTime: "20 min",
    difficulty: "Facile",
    description: "Fines crêpes dorées garnies d'une couche généreuse de Crème de Pistache TOFFIA et amandes effilées.",
    productUsed: "Crème de Pistache TOFFIA",
    image: "/caramel2.png",
    ingredients: [
      "8 crêpes fines maison",
      "200g de Crème de Pistache TOFFIA",
      "Amandes effilées grillées",
      "Sucre glace pour le saupoudrage",
    ],
  },
  {
    id: "glace-caramel-artisanale",
    title: "Glace Artisanale au Caramel Onctueux",
    prepTime: "40 min + prise",
    difficulty: "Moyen",
    description: "Une glace veloutée sans sorbetière, sublimée par un coulis de Crème Caramel TOFFIA et éclats de pralin.",
    productUsed: "Crème Caramel TOFFIA",
    image: "/caramel3.png",
    ingredients: [
      "400ml de crème liquide entière",
      "200ml de lait concentré sucré",
      "150g de Crème Caramel TOFFIA",
      "60g de pralin concassé",
    ],
  },
  {
    id: "muffins-coeur-coulant-noisette",
    title: "Muffins Cœur Coulant à la Noisette",
    prepTime: "30 min",
    difficulty: "Facile",
    description: "Muffins moelleux au cœur fondant de Crème de Noisettes TOFFIA, parfaits pour le goûter ou le brunch.",
    productUsed: "Crème de Fourrage Noisettes TOFFIA",
    image: "/caramel1.png",
    ingredients: [
      "250g de farine type 55",
      "100g de sucre",
      "2 œufs",
      "120ml de lait",
      "150g de Crème de Noisettes TOFFIA",
    ],
  },
  {
    id: "tartelettes-noix-caramel",
    title: "Tartelettes aux Noix & Caramel Doré",
    prepTime: "45 min",
    difficulty: "Moyen",
    description: "Fond de tarte croustillant garni d'un appareil aux noix caramélisées et d'un filet de Nappage Miroir TOFFIA.",
    productUsed: "Nappage Miroir Caramel TOFFIA",
    image: "/caramel4.png",
    ingredients: [
      "Pâte sucrée pur beurre",
      "150g de cerneaux de noix",
      "100g de sucre caramélisé",
      "120g de Nappage Miroir Caramel TOFFIA",
      "30g de beurre doux",
    ],
  },
];
