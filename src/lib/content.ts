export const site = {
  name: "Les Acolytes",
  tagline: "Restaurant · Brasserie · Oncopole",
  city: "Toulouse",
  address: "7 chemin des Silos, 31100 Toulouse",
  addressLine2: "Oncopole / Zone Thibaud",
  phone: "05 67 16 66 47",
  phoneHref: "tel:+33567166647",
  email: "contact@les-acolytes.fr",
  facebook: "https://www.facebook.com/lesacolytes31/",
  reservationUrl: "https://www.thefork.fr/restaurant/les-acolytes-r716329",
  seatsTotal: 200,
  seatsInside: 100,
  seatsTerrace: 100,
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La carte" },
  { href: "/le-restaurant", label: "Le restaurant" },
  { href: "/groupes-entreprises", label: "Groupes & entreprises" },
  { href: "/contact", label: "Infos & contact" },
];

export const openingHours = [
  { day: "Lundi", hours: "Déjeuner 12h – 14h30" },
  { day: "Mardi", hours: "Déjeuner 12h – 14h30" },
  { day: "Mercredi", hours: "Déjeuner 12h – 14h30" },
  { day: "Jeudi", hours: "Déjeuner 12h – 14h30 · Afterwork le soir" },
  { day: "Vendredi", hours: "Déjeuner 12h – 14h30" },
  { day: "Samedi", hours: "Sur privatisation uniquement" },
  { day: "Dimanche", hours: "Fermé" },
];

export const menuNote =
  "Carte indicative, susceptible d'évoluer au fil des saisons — contactez-nous pour la carte du moment.";

export const menuCategories = [
  {
    title: "Entrées",
    photo: { src: "/images/plat-tartare-saumon.webp", alt: "Tartare de saumon aux noisettes et crème ciboulette" },
    items: [
      { name: "Croquettes de poulet du chef", price: "16 €" },
      { name: "Tataki de bœuf, sauce ponzu", price: "28 €" },
      { name: "Salade César au poulet", price: "17 €" },
      { name: "Moussaka végétarienne", price: "18 €" },
    ],
  },
  {
    title: "Plats",
    photo: { src: "/images/plat-thon.webp", alt: "Pavé de thon mi-cuit, carottes et crème d'herbes" },
    items: [
      { name: "Magret de canard, frites, salade", price: "17 €" },
      { name: "Burger effiloché de porc", price: "19 €" },
      { name: "Pavé de saumon", price: "20 €" },
      { name: "Pavé de thon mi-cuit", price: "19 €" },
    ],
  },
  {
    title: "Le midi",
    photo: { src: "/images/plat-burrata.webp", alt: "Salade burrata, prosciutto et légumes rôtis" },
    items: [
      { name: "Menu du jour (entrée + plat ou plat + dessert)", price: "dès 15,90 €" },
      { name: "Formule complète (entrée + plat + dessert)", price: "sur demande" },
    ],
  },
];

export const dessertPhotos = [
  { src: "/images/dessert-tiramisu.webp", alt: "Tiramisu maison, noisettes et copeaux de chocolat" },
  { src: "/images/dessert-cheesecake-citron-vert.webp", alt: "Cheesecake au citron vert" },
  { src: "/images/dessert-crumble-caramel.webp", alt: "Crumble caramel beurre salé" },
  { src: "/images/dessert-agrumes-chocolat.webp", alt: "Verrine d'agrumes, chantilly et chocolat" },
];

export const highlights = [
  {
    title: "Ancien cabaret réhabilité",
    description:
      "Une salle atypique, chaleureuse et pleine de caractère, entre décor baroque et esprit brasserie.",
  },
  {
    title: "Terrasse ombragée",
    description:
      "100 places à l'ombre des parasols et de l'olivier, un vrai havre de verdure pour souffler entre midi et deux.",
  },
  {
    title: "Fait maison, produits frais",
    description:
      "Une cuisine généreuse et de saison, pensée par Lucie & Adrien et leur équipe.",
  },
  {
    title: "Afterwork du jeudi",
    description:
      "Chaque jeudi soir, la maison s'anime pour un afterwork convivial entre collègues ou amis.",
  },
];

export const eventTypes = [
  "Séminaires d'entreprise",
  "Cocktails & banquets",
  "Anniversaires & fêtes privées",
  "Afterworks sur mesure",
  "Tournoi de pétanque inter-entreprises",
  "Paniers gourmands pour vos cadeaux",
];
