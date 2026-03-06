import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import logoDomma from "@/assets/logo-domma.jpeg";

const langLabels: Record<Language, string> = { fr: "FR", en: "EN", pt: "PT" };

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.menu", href: "#menu" },
    { key: "nav.orders", href: "#orders" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/50">
            <img src={logoDomma} alt="DOMMA" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-xl gold-text-gradient font-semibold tracking-wider">
            DOMMA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1 border border-gold/30 rounded-full p-1">
          {(Object.keys(langLabels) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 text-xs font-body tracking-wider rounded-full transition-all duration-300 ${
                language === lang
                  ? "gold-gradient text-background font-semibold"
                  : "text-cream/50 hover:text-gold"
              }`}
            >
              {langLabels[lang]}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex gap-2 pt-4 border-t border-gold/10">
                {(Object.keys(langLabels) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setMobileOpen(false); }}
                    className={`px-4 py-2 text-xs font-body tracking-wider rounded-full transition-all ${
                      language === lang
                        ? "gold-gradient text-background font-semibold"
                        : "border border-gold/30 text-cream/50"
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
