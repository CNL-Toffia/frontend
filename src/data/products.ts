export type ProductCategory =
  | "tous"
  | "caramels-liquides"
  | "pates-a-tartiner"
  | "nappages"
  | "gamme-pro";

export interface Product {
  id: string;
  name: string;
  name_ar?: string;
  category: "caramels-liquides" | "pates-a-tartiner" | "nappages" | "gamme-pro";
  categoryLabel: string;
  categoryLabel_ar?: string;
  sizes: string[];
  sizes_ar?: string[];
  description: string;
  description_ar?: string;
  shortDescription: string;
  shortDescription_ar?: string;
  image: string;
  isBestSeller?: boolean;
  tag?: string;
  tag_ar?: string;
  ingredients?: string;
  ingredients_ar?: string;
  usage?: string;
  usage_ar?: string;
}

export const productCategories = [
  { id: "tous", label: "Tous les produits" },
  { id: "caramels-liquides", label: "Caramels Liquides" },
  { id: "pates-a-tartiner", label: "Pâtes à Tartiner" },
  { id: "nappages", label: "Nappages" },
  { id: "gamme-pro", label: "Gamme Professionnelle" },
] as const;

export const products: Product[] = [
  {
    id: "creme-caramel",
    name: "Crème Caramel",
    name_ar: "كريمة كراميل",
    category: "caramels-liquides",
    categoryLabel: "Gamme Crèmes",
    categoryLabel_ar: "تشكيلة الكريمات",
    sizes: ["400g", "2kg"],
    sizes_ar: ["400غ", "2كغ"],
    shortDescription: "Onctuosité incomparable et goût pur de caramel doré cuit à point.",
    shortDescription_ar: "قوام حريري لا يُضاهى ومذاق نقي للكراميل الذهبي المطهو بعناية.",
    description:
      "La recette signature de TOFFIA. Une crème caramel fondante à la texture veloutée, idéale pour tartiner, napper vos crêpes ou sublimer vos créations pâtissières.",
    description_ar:
      "الوصفة المميزة لدار توفيا. كريمة كراميل ذائبة بقوام مخملي ناعم، مثالية للدهن، وتزيين الكريب أو إثراء إبداعاتكم في فن الحلويات.",
    image: "/caramel2.png",
    isBestSeller: true,
    tag: "Best-Seller",
    tag_ar: "الأكثر طلباً",
    ingredients: "Sucre caramélisé, lait concentré, beurre doux, arôme naturel de vanille.",
    ingredients_ar: "سكر مكرمل، حليب مكثف، زبدة طرية، خلاصة الفانيليا الطبيعية.",
    usage: "Tartinade, nappage dessert, fourrage pâtisserie.",
    usage_ar: "للدهن، تغليف الحلويات، حشو المعجنات.",
  },
  {
    id: "creme-caramel2",
    name: "Crème Caramel Spéciale",
    name_ar: "كريمة كراميل كلاسيك",
    category: "caramels-liquides",
    categoryLabel: "Gamme Crèmes",
    categoryLabel_ar: "تشكيلة الكريمات",
    sizes: ["400g", "2kg"],
    sizes_ar: ["400غ", "2كغ"],
    shortDescription: "Onctuosité incomparable et goût pur de caramel doré cuit à point.",
    shortDescription_ar: "قوام حريري لا يُضاهى ومذاق نقي للكراميل الذهبي المطهو بعناية.",
    description:
      "La recette signature de TOFFIA. Une crème caramel fondante à la texture veloutée, idéale pour tartiner, napper vos crêpes ou sublimer vos créations pâtissières.",
    description_ar:
      "الوصفة المميزة لدار توفيا. كريمة كراميل ذائبة بقوام مخملي ناعم، مثالية للدهن، وتزيين الكريب أو إثراء إبداعاتكم في فن الحلويات.",
    image: "/caramel2.png",
    isBestSeller: true,
    tag: "Best-Seller",
    tag_ar: "الأكثر طلباً",
    ingredients: "Sucre caramélisé, lait concentré, beurre doux, arôme naturel de vanille.",
    ingredients_ar: "سكر مكرمل، حليب مكثف، زبدة طرية، خلاصة الفانيليا الطبيعية.",
    usage: "Tartinade, nappage dessert, fourrage pâtisserie.",
    usage_ar: "للدهن، تغليف الحلويات، حشو المعجنات.",
  },
  {
    id: "creme-caramel3",
    name: "Crème Caramel Douceur",
    name_ar: "كريمة كراميل فاخرة",
    category: "caramels-liquides",
    categoryLabel: "Gamme Crèmes",
    categoryLabel_ar: "تشكيلة الكريمات",
    sizes: ["400g", "2kg"],
    sizes_ar: ["400غ", "2كغ"],
    shortDescription: "Onctuosité incomparable et goût pur de caramel doré cuit à point.",
    shortDescription_ar: "قوام حريري لا يُضاهى ومذاق نقي للكراميل الذهبي المطهو بعناية.",
    description:
      "La recette signature de TOFFIA. Une crème caramel fondante à la texture veloutée, idéale pour tartiner, napper vos crêpes ou sublimer vos créations pâtissières.",
    description_ar:
      "الوصفة المميزة لدار توفيا. كريمة كراميل ذائبة بقوام مخملي ناعم، مثالية للدهن، وتزيين الكريب أو إثراء إبداعاتكم في فن الحلويات.",
    image: "/caramel2.png",
    isBestSeller: true,
    tag: "Best-Seller",
    tag_ar: "الأكثر طلباً",
    ingredients: "Sucre caramélisé, lait concentré, beurre doux, arôme naturel de vanille.",
    ingredients_ar: "سكر مكرمل، حليب مكثف، زبدة طرية، خلاصة الفانيليا الطبيعية.",
    usage: "Tartinade, nappage dessert, fourrage pâtisserie.",
    usage_ar: "للدهن، تغليف الحلويات، حشو المعجنات.",
  },
  {
    id: "creme-de-pistache",
    name: "Crème de Pistache",
    name_ar: "كريمة الفستق الفاخرة",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Crèmes",
    categoryLabel_ar: "تشكيلة الكريمات",
    sizes: ["200g"],
    sizes_ar: ["200غ"],
    shortDescription: "Une pâte onctueuse aux pistaches soigneusement sélectionnées et torréfiées.",
    shortDescription_ar: "عجينة كريمية ناعمة محضرة من أجود حبات الفستق المنتقاة والمحمصة بعناية.",
    description:
      "Une crème gourmande d'exception alliant la douceur lactée à la puissance aromatique des pistaches de première qualité. Une expérience gustative luxueuse.",
    description_ar:
      "كريمة استثنائية تجمع بين النعومة ونكهة الفستق الأصيلة الفاخرة لتجربة تذوق راقية.",
    image: "/caramel4.png",
    isBestSeller: true,
    tag: "Coup de Cœur",
    tag_ar: "مختارات الشيف",
    ingredients: "Pistaches sélectionnées (min 30%), sucre, huile végétale noble, lait écrémé en poudre.",
    ingredients_ar: "فستق فاخر منتقى (30% على الأقل)، سكر، زيوت نباتية نبيلة، حليب خالي الدسم.",
    usage: "Dégustation pure, garniture de macarons, tartes gourmandes.",
    usage_ar: "للتذوق المباشر، حشو الماكرون والتارت الفاخر.",
  },
  {
    id: "caramel-mou-amandes",
    name: "Caramel Mou aux Amandes",
    name_ar: "كراميل طري باللوز المحمص",
    category: "caramels-liquides",
    categoryLabel: "Gamme Tartinades & Préparations",
    categoryLabel_ar: "تشكيلة الكراميل والتحضيرات",
    sizes: ["Format individuel", "Pot 350g"],
    sizes_ar: ["حجم فردي", "عبوة 350غ"],
    shortDescription: "La douceur d'un caramel fondant relevé par le croquant des amandes torréfiées.",
    shortDescription_ar: "نعومة الكراميل الذائب مع قرمشة حبات اللوز المحمصة بعناية.",
    description:
      "Un équilibre parfait entre le fondant du caramel traditionnel cuit lentement et le croquant généreux d'amandes entières dorées.",
    description_ar:
      "توازن مثالي بين طراوة الكراميل التقليدي المطبوخ على نار هادئة وقرمشة اللوز الذهبي المحمص.",
    image: "/caramel3.png",
    isBestSeller: true,
    tag: "Incontournable",
    tag_ar: "أساسي",
    ingredients: "Caramel au beurre doux, amandes torréfiées entières, pointe de sel.",
    ingredients_ar: "كراميل بالزبدة الطرية، لوز محمص كامل، رشة ملح بحري.",
    usage: "Confiserie, accompagnement café, inclusion gâteaux.",
    usage_ar: "للتحلية، مرافقة القهوة، وإضافات الكيك.",
  },
  {
    id: "creme-fourrage-noisettes",
    name: "Crème de Fourrage aux Noisettes",
    name_ar: "كريمة حشو البندق",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Crèmes",
    categoryLabel_ar: "تشكيلة الكريمات",
    sizes: ["200g"],
    sizes_ar: ["200غ"],
    shortDescription: "Texture fine et saveur intense de noisettes grillées.",
    shortDescription_ar: "قوام ناعم ونكهة مركزة من البندق المحمص الفاخر.",
    description:
      "Conçue spécialement pour les amateurs de noisettes et les artisans pâtissiers cherchant une texture stable et fondante pour leurs fourrages.",
    description_ar:
      "مُعدة خصيصاً لعشاق البندق وصانعي المعجنات الباحثين عن قوام ثابت ومثالي للحشو.",
    image: "/caramel1.png",
    isBestSeller: false,
    ingredients: "Noisettes grillées, cacao fin, lait écrémé, sucre caramélisé.",
    ingredients_ar: "بندق محمص، كاكاو فاخر، حليب منزوع الدسم، سكر مكرمل.",
    usage: "Fourrage croissants, brioches, choux et entremets.",
    usage_ar: "حشو الكرواسون، البريوش، الشو والحلويات.",
  },
  {
    id: "beurre-de-cacahuetes",
    name: "Beurre de Cacahuètes",
    name_ar: "زبدة الفول السوداني الطبيعية",
    category: "pates-a-tartiner",
    categoryLabel: "Gamme Tartinades & Préparations",
    categoryLabel_ar: "عجائن الدهن والتحضيرات",
    sizes: ["350g"],
    sizes_ar: ["350غ"],
    shortDescription: "100% énergie et saveur pure d'arachides grillées.",
    shortDescription_ar: "100% طاقة ومذاق أصيل من الفول السوداني المحمص.",
    description:
      "Une texture crémeuse et riche, préparée à partir de cacahuètes rigoureusement sélectionnées et torréfiées à cœur pour un plaisir sain et gourmand.",
    description_ar:
      "قوام كريمي غني، محضر من حبات الفول السوداني المنتقاة بعناية والمحمصة بالكامل لتغذية صحية ولذيذة.",
    image: "/caramel2.png",
    isBestSeller: false,
    ingredients: "Cacahuètes torréfiées sélectionnées, pincée de sel marin.",
    ingredients_ar: "فول سوداني محمص فاخر، رشة ملح بحري.",
    usage: "Tartine petit-déjeuner, smoothies, cuisine & pâtisserie.",
    usage_ar: "للفطور الصباحي، العصائر والمخبوزات الصحية.",
  },
  {
    id: "caramel-mou-cacahuetes",
    name: "Caramel Mou aux Cacahuètes",
    name_ar: "كراميل طري بالفول السوداني",
    category: "caramels-liquides",
    categoryLabel: "Gamme Tartinades & Préparations",
    categoryLabel_ar: "عجائن الدهن والتحضيرات",
    sizes: ["Format individuel", "Pot 350g"],
    sizes_ar: ["حجم فردي", "عبوة 350غ"],
    shortDescription: "Saveur riche et gourmande au mariage caramel-cacahuète.",
    shortDescription_ar: "مزيج غني يجمع بين الكراميل الناعم والفول السوداني المقرمش.",
    description:
      "Le mariage réconfortant du caramel onctueux et de cacahuètes croustillantes pour une texture irrésistible.",
    description_ar:
      "مزيج دافئ ولذيذ يجمع بين الكراميل الذائب وحبات الفول السوداني المقرمشة لقوام لا يُقاوم.",
    image: "/caramel3.png",
    isBestSeller: false,
    ingredients: "Caramel onctueux, éclats de cacahuètes torréfiées.",
    ingredients_ar: "كراميل ناعم، رقائق فول سوداني محمص.",
    usage: "Dégustation directe, snacking gourmand.",
    usage_ar: "للتناول المباشر والوجبات الخفيفة.",
  },
  {
    id: "nappage-caramel-special",
    name: "Nappage Miroir Caramel",
    name_ar: "تغليف مرآة كراميل (ميروار)",
    category: "nappages",
    categoryLabel: "Gamme Nappages",
    categoryLabel_ar: "تشكيلة التغليف",
    sizes: ["1kg", "5kg"],
    sizes_ar: ["1كغ", "5كغ"],
    shortDescription: "Brillance éclatante et tenue parfaite pour entremets et glaces.",
    shortDescription_ar: "بريق ساطع وثبات مثالي للحلويات والمثلجات.",
    description:
      "Nappage fluide et brillant au goût authentique de caramel cuit. Prêt à l'emploi avec une excellente tenue au froid positif.",
    description_ar:
      "صلصة تغليف لامعة وانسيابية بمذاق الكراميل الأصيل. جاهزة للاستخدام مع ثبات ممتاز على الحلويات الباردة.",
    image: "/caramel4.png",
    isBestSeller: false,
    ingredients: "Sirop de caramel pur, gélifiant végétal, arôme naturel.",
    ingredients_ar: "شراب كراميل نقي، مادة هلامية نباتية، نكهات طبيعية.",
    usage: "Glaçage d'entremets, nappage de glaces et coupes de desserts.",
    usage_ar: "تزيين الكيك والموس، تغليف المثلجات والحلويات الفاخرة.",
  },
  {
    id: "gamme-professionnelle-seaux",
    name: "Solutions Pâtissières Professionnelles",
    name_ar: "حلول مهنية لصانعي الحلويات",
    category: "gamme-pro",
    categoryLabel: "Gamme Professionnelle",
    categoryLabel_ar: "التشكيلة المهنية",
    sizes: ["Formats sur demande", "Seaux 5kg / 10kg"],
    sizes_ar: ["أحجام حسب الطلب", "دلاء 5كغ / 10كغ"],
    shortDescription: "Conditionnements professionnels adaptés aux boulangeries, pâtisseries et glaciers.",
    shortDescription_ar: "عبوات مهنية مخصصة للمخابز، ومحلات الحلويات والمثلجات.",
    description:
      "CNL Caramel propose aux professionnels des volumes adaptés, une régularité technique irréprochable et un accompagnement sur-mesure pour leurs productions quotidiennes.",
    description_ar:
      "تقدم سي إن إل كراميل للمهنيين أحجاماً مناسبة، وجودة تقنية ثابتة وموثوقة، مع مرافقة مخصصة لإنتاجهم اليومي.",
    image: "/caramel1.png",
    isBestSeller: false,
    tag: "Gamme Pro",
    tag_ar: "التشكيلة المهنية",
    ingredients: "Formulations adaptées aux contraintes industrielles et artisanales.",
    ingredients_ar: "تركيبات متوافقة مع متطلبات الإنتاج الحرفي والصناعي.",
    usage: "Pâtisserie industrielle, ateliers artisanaux, hôtellerie & restauration.",
    usage_ar: "صناعة الحلويات، الورشات الحرفية، الفنادق والمطاعم.",
  },
];
