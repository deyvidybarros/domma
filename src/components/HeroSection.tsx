import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-pastries.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="DOMMA Pastries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold gold-text-gradient mb-4 tracking-wide">
            DOMMA
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="font-accent text-xl md:text-2xl text-gold-light tracking-[0.3em] uppercase mb-6"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="font-body text-sm md:text-base text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="gold-gradient px-8 py-3 rounded-full font-body text-sm font-semibold tracking-widest uppercase text-background hover:opacity-90 transition-opacity shadow-gold"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#orders"
            className="border border-gold/50 px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase text-gold hover:bg-gold/10 transition-colors"
          >
            {t("hero.order")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
