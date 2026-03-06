import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDomma from "@/assets/logo-domma.jpeg";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold shadow-gold">
              <img src={logoDomma} alt="DOMMA" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-accent text-lg text-gold-light tracking-widest mb-8"
          >
            {t("loading.text")}
          </motion.p>

          <div className="w-48 h-[2px] bg-green-medium rounded-full overflow-hidden">
            <motion.div
              className="h-full gold-gradient"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
