import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import menuSweets from "@/assets/menu-sweets.jpg";
import menuCakes from "@/assets/menu-cakes.jpg";
import menuSavory from "@/assets/menu-savory.jpg";

type Category = "sweets" | "cakes" | "savory";

const categories: { key: Category; labelKey: string; image: string }[] = [
  { key: "sweets", labelKey: "menu.cat.sweets", image: menuSweets },
  { key: "cakes", labelKey: "menu.cat.cakes", image: menuCakes },
  { key: "savory", labelKey: "menu.cat.savory", image: menuSavory },
];

const menuItems: Record<Category, { nameKey: string; descKey: string; price: string }[]> = {
  sweets: [
    { nameKey: "menu.brigadeiro.name", descKey: "menu.brigadeiro.desc", price: "€3.50" },
    { nameKey: "menu.beijinho.name", descKey: "menu.beijinho.desc", price: "€3.50" },
    { nameKey: "menu.quindim.name", descKey: "menu.quindim.desc", price: "€4.00" },
  ],
  cakes: [
    { nameKey: "menu.bolo.name", descKey: "menu.bolo.desc", price: "€18.00" },
    { nameKey: "menu.mousse.name", descKey: "menu.mousse.desc", price: "€6.50" },
    { nameKey: "menu.pudim.name", descKey: "menu.pudim.desc", price: "€5.50" },
  ],
  savory: [
    { nameKey: "menu.pao.name", descKey: "menu.pao.desc", price: "€2.50" },
    { nameKey: "menu.coxinha.name", descKey: "menu.coxinha.desc", price: "€3.00" },
    { nameKey: "menu.empada.name", descKey: "menu.empada.desc", price: "€3.00" },
  ],
};

const MenuSection = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("sweets");

  const activeCat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-24 px-6 bg-green-medium/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm text-gold tracking-[0.4em] uppercase mb-3">
            {t("menu.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">{t("menu.title")}</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-full font-body text-sm tracking-wider transition-all duration-300 ${
                active === cat.key
                  ? "gold-gradient text-background font-semibold shadow-gold"
                  : "border border-gold/20 text-cream/50 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={activeCat.image}
                alt={t(activeCat.labelKey)}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            <div className="space-y-6">
              {menuItems[active].map((item, i) => (
                <motion.div
                  key={item.nameKey}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start justify-between p-5 rounded-xl border border-gold/10 bg-green-medium/20 hover:border-gold/25 transition-colors group"
                >
                  <div>
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {t(item.nameKey)}
                    </h3>
                    <p className="font-body text-sm text-cream/40 mt-1">{t(item.descKey)}</p>
                  </div>
                  <span className="font-accent text-xl text-gold font-semibold whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
