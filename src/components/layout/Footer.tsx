import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="font-display text-2xl font-semibold">
              LUXE
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Curating exceptional products for the discerning individual.
              Quality, elegance, and sophistication in every detail.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("nav.shop")}
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("nav.categories")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">
              {t("footer.customerService")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("footer.shipping")}
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("footer.returnPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium">
              {t("footer.newsletter")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.newsletterText")}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            ©2025{" "}
            <Link
              to="https://benhamedsouhailportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-yellow-500 hover:underline mx-1"
            >
              Souhail
            </Link>{" "}
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
