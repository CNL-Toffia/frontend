export type ProductCategory =
  | "tous"
  | "caramels-liquides"
  | "pates-a-tartiner"
  | "nappages"
  | "gamme-pro";

export interface Product {
  id: string;
  name: string;
  category: "caramels-liquides" | "pates-a-tartiner" | "nappages" | "gamme-pro";
  categoryLabel: string;
  sizes: string[];
  description: string;
  shortDescription: string;
  image: string;
  isBestSeller?: boolean;
  tag?: string;
  ingredients?: string;
  usage?: string;
}

export const productCategories = [
  { id: "tous", label: "Tous" },
  { id: "caramels-liquides", label: "Caramels Liquides" },
  { id: "pates-a-tartiner", label: "Pâtes à Tartiner" },
  { id: "nappages", label: "Nappages" },
  { id: "gamme-pro", label: "Gamme Professionnelle" },
] as const;

export const products: Product[] = [
  {
    id: "creme-caramel",
    name: "Crème Caramel",
    category: "caramels-liquides",
    categoryLabel: "Gamme Crèmes",
    sizes: ["400g", "2kg"],
    shortDescription: "Onctuosité incomparable et goût pur de caramel doré cuit à point.",
    description:
      "La recette signature de TOFFIA. Une crème caramel fondante à la texture veloutée, idéale pour tartiner, napper vos crêpes ou sublimer vos créations pâtissières.",
    image: "/images/products/creme-caramel.png",
    isBestSeller: true,
    tag: "Best-seller",
    ingredients: "Sucre caramélisé, lait concentré, beurre doux, arôme naturel de vanille.",
    usage: "Tartinade, nappage dessert, fourrage pâtisserie.",
  },
  {
    id: "creme-de-pistache",
    name: "Crème de Pistache",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Crèmes",
    sizes: ["200g"],
    shortDescription: "Une pâte onctueuse aux pistaches soigneusement sélectionnées et torréfiées.",
    description:
      "Une crème gourmande d'exception alliant la douceur lactée à la puissance aromatique des pistaches de première qualité. Une expérience gustative luxueuse.",
    image: "/images/products/creme-pistache.png",
    isBestSeller: true,
    tag: "Coup de cœur",
    ingredients: "Pistaches sélectionnées (min 30%), sucre, huile végétale noble, lait écrémé en poudre.",
    usage: "Dégustation pure, garniture de macarons, tartes gourmandes.",
  },
  {
    id: "caramel-mou-amandes",
    name: "Caramel Mou aux Amandes",
    category: "caramels-liquides",
    categoryLabel: "Gamme Tartinades & Préparations",
    sizes: ["Format individuel", "Pot 350g"],
    shortDescription: "La douceur d'un caramel fondant relevé par le croquant des amandes torréfiées.",
    description:
      "Un équilibre parfait entre le fondant du caramel traditionnel cuit lentement et le croquant généreux d'amandes entières dorées.",
    image: "/images/products/caramel-amandes.png",
    isBestSeller: true,
    tag: "Incontournable",
    ingredients: "Caramel au beurre doux, amandes torréfiées entières, pointe de sel.",
    usage: "Confiserie, accompagnement café, inclusion gâteaux.",
  },
  {
    id: "creme-fourrage-noisettes",
    name: "Crème de Fourrage aux Noisettes",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Crèmes",
    sizes: ["200g"],
    shortDescription: "Texture fine et saveur intense de noisettes grillées.",
    description:
      "Conçue spécialement pour les amateurs de noisettes et les artisans pâtissiers cherchant une texture stable et fondante pour leurs fourrages.",
    image: "/images/products/creme-noisette.png",
    isBestSeller: false,
    ingredients: "Noisettes grillées, cacao fin, lait écrémé, sucre caramélisé.",
    usage: "Fourrage croissants, brioches, choux et entremets.",
  },
  {
    id: "beurre-de-cacahuetes",
    name: "Beurre de Cacahuètes",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Tartinades & Préparations",
    sizes: ["350g"],
    shortDescription: "100% énergie et saveur pure d'arachides grillées.",
    description:
      "Une texture crémeuse et riche, préparée à partir de cacahuètes rigoureusement sélectionnées et torréfiées à cœur pour un plaisir sain et gourmand.",
    image: "/images/products/beurre-cacahuetes.png",
    isBestSeller: false,
    ingredients: "Cacahuètes torréfiées sélectionnées, pincée de sel marin.",
    usage: "Tartine petit-déjeuner, smoothies, cuisine & pâtisserie.",
  },
  {
    id: "caramel-mou-cacahuetes",
    name: "Caramel Mou aux Cacahuètes",
    category: "caramels-liquides",
    categoryLabel: "Gamme Tartinades & Préparations",
    sizes: ["Format individuel", "Pot 350g"],
    shortDescription: "Saveur riche et gourmande au mariage caramel-cacahuète.",
    description:
      "Le mariage réconfortant du caramel onctueux et de cacahuètes croustillantes pour une texture irrésistible.",
    image: "/images/products/caramel-cacahuetes.png",
    isBestSeller: false,
    ingredients: "Caramel onctueux, éclats de cacahuètes torréfiées.",
    usage: "Dégustation directe, snacking gourmand.",
  },
  {
    id: "nappage-caramel-special",
    name: "Nappage Miroir Caramel",
    category: "nappages",
    categoryLabel: "Gamme Nappages",
    sizes: ["1kg", "5kg"],
    shortDescription: "Brillance éclatante et tenue parfaite pour entremets et glaces.",
    description:
      "Nappage fluide et brillant au goût authentique de caramel cuit. Prêt à l'emploi avec une excellente tenue au froid positif.",
    image: "/images/products/nappage-caramel.png",
    isBestSeller: false,
    ingredients: "Sirop de caramel pur, gélifiant végétal, arôme naturel.",
    usage: "Glaçage d'entremets, nappage de glaces et coupes de desserts.",
  },
  {
    id: "gamme-professionnelle-seaux",
    name: "Solutions Pâtissières Professionnelles",
    category: "gamme-pro",
    categoryLabel: "Gamme Professionnelle",
    sizes: ["Formats sur demande", "Seaux 5kg / 10kg"],
    shortDescription: "Conditionnements professionnels adaptés aux boulangeries, pâtisseries et glaciers.",
    description:
      "CNL Caramel propose aux professionnels des volumes adaptés, une régularité technique irréprochable et un accompagnement sur-mesure pour leurs productions quotidiennes.",
    image: "/images/products/gamme-pro.png",
    isBestSeller: false,
    tag: "Pro",
    ingredients: "Formulations adaptées aux contraintes industrielles et artisanales.",
    usage: "Pâtisserie industrielle, ateliers artisanaux, hôtellerie & restauration.",
  },
];
