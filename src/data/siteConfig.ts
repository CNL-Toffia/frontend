export interface NavItem {
  label: string;
  href: string;
  dropdown?: boolean;
}

export interface ProductCategoryItem {
  id: string;
  name: string;
  href: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  company: string;
  tagline: string;
  founded: string;
  location: string;
  nav: NavItem[];
  productCategories: ProductCategoryItem[];
  contact: {
    company: string;
    address: string;
    phone: string;
    phoneFormatted: string;
    email: string;
  };
  social: {
    facebook: {
      name: string;
      url: string;
    };
    instagram: {
      handle: string;
      url: string;
    };
    tiktok: {
      handle: string;
      url: string;
    };
  };
  legal: {
    copyright: string;
    privacyPolicy: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "TOFFIA",
  company: "CNL Caramel",
  tagline: "La Passion du Caramel depuis 2011",
  founded: "2011",
  location: "Blida, Algérie",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Produits", href: "/produits", dropdown: true },
    { label: "Recettes", href: "/recettes" },
    { label: "Contact", href: "/contact" },
  ],
  productCategories: [
    {
      id: "caramels-liquides",
      name: "Caramels Liquides",
      href: "/produits?categorie=caramels-liquides",
      icon: "Droplet",
    },
    {
      id: "pates-a-tartiner",
      name: "Pâtes à Tartiner",
      href: "/produits?categorie=pates-a-tartiner",
      icon: "Cookie",
    },
    {
      id: "nappages",
      name: "Nappages",
      href: "/produits?categorie=nappages",
      icon: "Sparkles",
    },
    {
      id: "gamme-pro",
      name: "Gamme Professionnelle",
      href: "/produits?categorie=gamme-pro",
      icon: "ChefHat",
    },
  ],
  contact: {
    company: "CNL Caramel",
    address: "Centre Benkhelil Lot N°01 - GPR 329 - SEC09, 09000 Blida, Algérie",
    phone: "+213 560 74 80 92",
    phoneFormatted: "+213 560 74 80 92",
    email: "contact@cnlcaramel.com",
  },
  social: {
    facebook: {
      name: "CNL Caramel",
      url: "https://web.facebook.com/CNLcaramel",
    },
    instagram: {
      handle: "@toffia_officiel",
      url: "https://www.instagram.com/toffia_officiel",
    },
    tiktok: {
      handle: "@cnl.caramel",
      url: "https://www.tiktok.com/@cnl.caramel",
    },
  },
  legal: {
    copyright: "© 2026 CNL Caramel · Tous droits réservés",
    privacyPolicy: "/politique-de-confidentialite",
  },
};
