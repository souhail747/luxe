import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "../../bg2.jpg";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute w-5/12 inset-0 bg-black/40" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full px-6 md:px-12 flex items-center min-h-screen">
        {/* Left column: text 1/3 of width */}
        <div className="w-5/12 flex flex-col items-start justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-7xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-snug"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-[20px] text-white/90"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center  w-full "
            >
              <Button asChild variant="hero" size="lg" className="gap-2 px-8">
                <Link to="/shop" className="flex justify-center items-center">
                  {t("hero.shopNow")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Optional: right side empty (2/3) */}
        <div className="w-2/3"></div>
      </div>
    </section>
  );
}
