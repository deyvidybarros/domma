import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logoDomma from "@/assets/logo-domma.jpeg";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="py-16 px-6 border-t border-gold/10 bg-green-medium/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/50">
                                <img src={logoDomma} alt="DOMMA" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-display text-xl gold-text-gradient font-semibold">DOMMA</span>
                        </div>
                        <p className="font-accent text-sm text-cream/40 italic">
                            Pâtisserie & Spécialités Brésiliennes
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-display text-sm text-gold tracking-wider uppercase mb-4">
                            {t("footer.hours")}
                        </h4>
                        <div className="space-y-2 font-body text-sm text-cream/50">
                            <p>{t("footer.hours.weekday")}</p>
                            {/*<p>{t("footer.hours.sunday")}</p>*/}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-sm text-gold tracking-wider uppercase mb-4">
                            {t("nav.contact")}
                        </h4>
                        <div className="space-y-3">
                            <a href="#" className="flex items-center gap-2 font-body text-sm text-cream/50 hover:text-gold transition-colors">
                                <MapPin size={14} className="text-gold/60" />
                                Esch-sur-Alzette, Luxembourg
                            </a>
                            <a href="tel:+33123456789" className="flex items-center gap-2 font-body text-sm text-cream/50 hover:text-gold transition-colors">
                                <Phone size={14} className="text-gold/60" />
                                +33 x xx xx xx xx
                            </a>
                            <a href="mailto:contact@domma.fr" className="flex items-center gap-2 font-body text-sm text-cream/50 hover:text-gold transition-colors">
                                <Mail size={14} className="text-gold/60" />
                                contact@domma.lu
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-display text-sm text-gold tracking-wider uppercase mb-4">
                            {t("footer.follow")}
                        </h4>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/domma.lux/" target="_blank" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/50 transition-colors">
                                <Instagram size={18} />
                            </a>
                            {/*<a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/50 transition-colors">*/}
                            {/*    <Facebook size={18} />*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gold/10 pt-6 text-center">
                    <p className="font-body text-xs text-cream/30">
                        © 2026 DOMMA. {t("footer.rights")}.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
