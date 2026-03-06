import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarDays, Gift, Truck } from "lucide-react";
import { toast } from "sonner";

const infoCards = [
  { icon: CalendarDays, titleKey: "orders.info1.title", textKey: "orders.info1.text" },
  { icon: Gift, titleKey: "orders.info2.title", textKey: "orders.info2.text" },
  { icon: Truck, titleKey: "orders.info3.title", textKey: "orders.info3.text" },
];

const OrdersSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("✨ " + (t("orders.form.submit")));
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="orders" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm text-gold tracking-[0.4em] uppercase mb-3">
            {t("orders.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">{t("orders.title")}</h2>
        </motion.div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-gold/10 bg-green-medium/20 text-center"
            >
              <card.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-cream mb-2">{t(card.titleKey)}</h3>
              <p className="font-body text-sm text-cream/50">{t(card.textKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 rounded-2xl border border-gold/15 bg-green-medium/10"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { key: "name", type: "text", label: "orders.form.name" },
              { key: "email", type: "email", label: "orders.form.email" },
              { key: "phone", type: "tel", label: "orders.form.phone" },
              { key: "date", type: "date", label: "orders.form.date" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-xs text-cream/40 tracking-wider uppercase mb-1 block">
                  {t(field.label)}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-green-medium/40 border border-gold/10 rounded-lg px-4 py-2.5 font-body text-sm text-cream placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="mb-6">
            <label className="font-body text-xs text-cream/40 tracking-wider uppercase mb-1 block">
              {t("orders.form.message")}
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-green-medium/40 border border-gold/10 rounded-lg px-4 py-2.5 font-body text-sm text-cream placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full gold-gradient py-3 rounded-full font-body text-sm font-semibold tracking-widest uppercase text-background hover:opacity-90 transition-opacity shadow-gold"
          >
            {t("orders.form.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrdersSection;
