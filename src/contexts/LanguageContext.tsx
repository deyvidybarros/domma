import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "fr" | "en" | "pt";

type Translations = {
  [key: string]: { fr: string; en: string; pt: string };
};

export const translations: Translations = {
  // Nav
  "nav.home": { fr: "Accueil", en: "Home", pt: "Início" },
  "nav.about": { fr: "À Propos", en: "About", pt: "Sobre" },
  "nav.menu": { fr: "Carte", en: "Menu", pt: "Cardápio" },
  "nav.orders": { fr: "Commandes", en: "Orders", pt: "Encomendas" },
  "nav.contact": { fr: "Contact", en: "Contact", pt: "Contato" },

  // Hero
  "hero.subtitle": {
    fr: "Pâtisserie & Spécialités Brésiliennes",
    en: "Patisserie & Brazilian Specialties",
    pt: "Pâtisserie & Especialidades Brasileiras",
  },
  "hero.tagline": {
    fr: "L'art de la pâtisserie brésilienne, sublimé par la tradition française",
    en: "The art of Brazilian pastry, elevated by French tradition",
    pt: "A arte da confeitaria brasileira, elevada pela tradição francesa",
  },
  "hero.cta": { fr: "Découvrir la Carte", en: "Discover Our Menu", pt: "Descobrir o Cardápio" },
  "hero.order": { fr: "Commander", en: "Order Now", pt: "Encomendar" },

  // About
  "about.title": { fr: "Notre Histoire", en: "Our Story", pt: "Nossa História" },
  "about.text1": {
    fr: "Chez DOMMA, nous marions le savoir-faire de la pâtisserie française avec les saveurs authentiques du Brésil. Chaque création est une invitation au voyage, un pont entre deux cultures culinaires riches et passionnées.",
    en: "At DOMMA, we blend French pastry craftsmanship with authentic Brazilian flavors. Each creation is an invitation to travel, a bridge between two rich and passionate culinary cultures.",
    pt: "Na DOMMA, unimos o savoir-faire da confeitaria francesa com os sabores autênticos do Brasil. Cada criação é um convite à viagem, uma ponte entre duas culturas culinárias ricas e apaixonantes.",
  },
  "about.text2": {
    fr: "Nos ingrédients sont soigneusement sélectionnés, nos recettes transmises de génération en génération, et notre passion pour l'excellence guide chacune de nos créations.",
    en: "Our ingredients are carefully selected, our recipes passed down through generations, and our passion for excellence guides each of our creations.",
    pt: "Nossos ingredientes são cuidadosamente selecionados, nossas receitas transmitidas de geração em geração, e nossa paixão pela excelência guia cada uma de nossas criações.",
  },
  "about.values.title": { fr: "Nos Valeurs", en: "Our Values", pt: "Nossos Valores" },
  "about.value1.title": { fr: "Authenticité", en: "Authenticity", pt: "Autenticidade" },
  "about.value1.text": {
    fr: "Des recettes traditionnelles brésiliennes préparées avec amour",
    en: "Traditional Brazilian recipes prepared with love",
    pt: "Receitas tradicionais brasileiras preparadas com amor",
  },
  "about.value2.title": { fr: "Excellence", en: "Excellence", pt: "Excelência" },
  "about.value2.text": {
    fr: "Le meilleur de la pâtisserie française dans chaque bouchée",
    en: "The best of French pastry in every bite",
    pt: "O melhor da confeitaria francesa em cada mordida",
  },
  "about.value3.title": { fr: "Passion", en: "Passion", pt: "Paixão" },
  "about.value3.text": {
    fr: "Créer des moments de bonheur à travers nos saveurs",
    en: "Creating moments of happiness through our flavors",
    pt: "Criar momentos de felicidade através dos nossos sabores",
  },

  // Menu
  "menu.title": { fr: "Notre Carte", en: "Our Menu", pt: "Nosso Cardápio" },
  "menu.subtitle": {
    fr: "Découvrez nos créations artisanales",
    en: "Discover our artisanal creations",
    pt: "Descubra nossas criações artesanais",
  },
  "menu.cat.sweets": { fr: "Douceurs", en: "Sweets", pt: "Doces" },
  "menu.cat.cakes": { fr: "Gâteaux", en: "Cakes", pt: "Bolos" },
  "menu.cat.savory": { fr: "Salés", en: "Savory", pt: "Salgados" },
  // Sweet items
  "menu.brigadeiro.name": { fr: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro", pt: "Brigadeiro Gourmet" },
  "menu.brigadeiro.desc": {
    fr: "Chocolat belge, condensé artisanal",
    en: "Belgian chocolate, artisanal condensed milk",
    pt: "Chocolate belga, condensado artesanal",
  },
  "menu.beijinho.name": { fr: "Beijinho", en: "Beijinho", pt: "Beijinho" },
  "menu.beijinho.desc": {
    fr: "Noix de coco fraîche, vanille de Madagascar",
    en: "Fresh coconut, Madagascar vanilla",
    pt: "Coco fresco, baunilha de Madagascar",
  },
  "menu.quindim.name": { fr: "Quindim", en: "Quindim", pt: "Quindim" },
  "menu.quindim.desc": {
    fr: "Œufs fermiers, noix de coco, sucre doré",
    en: "Farm eggs, coconut, golden sugar",
    pt: "Ovos caipiras, coco, açúcar dourado",
  },
  // Cake items
  "menu.bolo.name": { fr: "Bolo de Rolo", en: "Bolo de Rolo", pt: "Bolo de Rolo" },
  "menu.bolo.desc": {
    fr: "Gâteau roulé traditionnel, confiture de goyave",
    en: "Traditional rolled cake, guava jam",
    pt: "Bolo de rolo tradicional, goiabada",
  },
  "menu.mousse.name": { fr: "Mousse Maracujá", en: "Passion Fruit Mousse", pt: "Mousse de Maracujá" },
  "menu.mousse.desc": {
    fr: "Fruit de la passion frais, crème légère",
    en: "Fresh passion fruit, light cream",
    pt: "Maracujá fresco, creme leve",
  },
  "menu.pudim.name": { fr: "Pudim", en: "Brazilian Flan", pt: "Pudim" },
  "menu.pudim.desc": {
    fr: "Flan brésilien au caramel onctueux",
    en: "Brazilian flan with silky caramel",
    pt: "Pudim de leite condensado com caramelo",
  },
  // Savory
  "menu.pao.name": { fr: "Pão de Queijo", en: "Cheese Bread", pt: "Pão de Queijo" },
  "menu.pao.desc": {
    fr: "Pain au fromage brésilien, croustillant et moelleux",
    en: "Brazilian cheese bread, crispy and soft",
    pt: "Pão de queijo mineiro, crocante e macio",
  },
  "menu.coxinha.name": { fr: "Coxinha", en: "Coxinha", pt: "Coxinha" },
  "menu.coxinha.desc": {
    fr: "Croquette de poulet effiloché, pâte dorée",
    en: "Shredded chicken croquette, golden dough",
    pt: "Coxinha de frango desfiado, massa dourada",
  },
  "menu.empada.name": { fr: "Empada", en: "Empada", pt: "Empada" },
  "menu.empada.desc": {
    fr: "Tourte brésilienne, garnitures variées",
    en: "Brazilian pie, assorted fillings",
    pt: "Empada brasileira, recheios variados",
  },

  // Orders
  "orders.title": { fr: "Commandes & Événements", en: "Orders & Events", pt: "Encomendas & Eventos" },
  "orders.subtitle": {
    fr: "Faites de vos occasions spéciales des moments inoubliables",
    en: "Make your special occasions unforgettable moments",
    pt: "Torne suas ocasiões especiais momentos inesquecíveis",
  },
  "orders.form.name": { fr: "Votre nom", en: "Your name", pt: "Seu nome" },
  "orders.form.email": { fr: "Votre e-mail", en: "Your email", pt: "Seu e-mail" },
  "orders.form.phone": { fr: "Téléphone", en: "Phone", pt: "Telefone" },
  "orders.form.date": { fr: "Date souhaitée", en: "Desired date", pt: "Data desejada" },
  "orders.form.message": { fr: "Détails de votre commande", en: "Order details", pt: "Detalhes do pedido" },
  "orders.form.submit": { fr: "Envoyer la Demande", en: "Send Request", pt: "Enviar Pedido" },
  "orders.info1.title": { fr: "Événements", en: "Events", pt: "Eventos" },
  "orders.info1.text": {
    fr: "Mariages, anniversaires, fêtes d'entreprise — nous créons des buffets sur mesure.",
    en: "Weddings, birthdays, corporate events — we create custom buffets.",
    pt: "Casamentos, aniversários, eventos corporativos — criamos buffets sob medida.",
  },
  "orders.info2.title": { fr: "Sur Mesure", en: "Custom Orders", pt: "Sob Medida" },
  "orders.info2.text": {
    fr: "Gâteaux personnalisés et coffrets cadeaux pour toutes les occasions.",
    en: "Custom cakes and gift boxes for all occasions.",
    pt: "Bolos personalizados e caixas de presente para todas as ocasiões.",
  },
  "orders.info3.title": { fr: "Livraison", en: "Delivery", pt: "Entrega" },
  "orders.info3.text": {
    fr: "Service de livraison disponible dans toute la région.",
    en: "Delivery service available throughout the region.",
    pt: "Serviço de entrega disponível em toda a região.",
  },

  // Footer
  "footer.hours": { fr: "Horaires", en: "Hours", pt: "Horário" },
  "footer.hours.weekday": { fr: "Lun - Sam: 9h - 19h", en: "Mon - Sat: 9am - 7pm", pt: "Seg - Sáb: 9h - 19h" },
  //"footer.hours.sunday": { fr: "Dim: 9h - 14h", en: "Sun: 9am - 2pm", pt: "Dom: 9h - 14h" },
  "footer.follow": { fr: "Suivez-nous", en: "Follow Us", pt: "Siga-nos" },
  "footer.rights": {
    fr: "Tous droits réservés",
    en: "All rights reserved",
    pt: "Todos os direitos reservados",
  },

  // Loading
  "loading.text": {
    fr: "Préparation de vos délices...",
    en: "Preparing your delights...",
    pt: "Preparando suas delícias...",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
