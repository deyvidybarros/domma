import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Award, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-interior.jpg";

const values = [
  { icon: Heart, titleKey: "about.value1.title", textKey: "about.value1.text" },
  { icon: Award, titleKey: "about.value2.title", textKey: "about.value2.text" },
  { icon: Sparkles, titleKey: "about.value3.title", textKey: "about.value3.text" },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-sm text-gold tracking-[0.4em] uppercase mb-3">
              {t("about.title")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-8 leading-tight">
              {t("about.title")}
            </h2>
            <div className="space-y-5">
              <p className="font-body text-sm leading-relaxed text-cream/60">{t("about.text1")}</p>
              <p className="font-body text-sm leading-relaxed text-cream/60">{t("about.text2")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={aboutImage} alt="DOMMA Interior" className="w-full h-80 lg:h-[28rem] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl" />
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-accent text-sm text-gold tracking-[0.4em] uppercase text-center mb-12"
          >
            {t("about.values.title")}
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl border border-gold/10 bg-green-medium/30 hover:border-gold/30 transition-colors"
              >
                <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-display text-lg text-cream mb-3">{t(v.titleKey)}</h3>
                <p className="font-body text-sm text-cream/50">{t(v.textKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
