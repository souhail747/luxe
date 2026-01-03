import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useThemeStore } from "@/store/themeStore";
import Cookies from "js-cookie";

const isAuthenticated = (): { user; token: string } | null => {
  const token = Cookies.get("token");
  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null;

  return token && user ? { user, token } : null;
};
interface UserMenuProps {
  name: string;
  role: string;
  onLogout: () => void;
  menuItems?: { label: string; onClick: () => void }[];
  imageUrl?: string;
}

export function UserMenu({
  name,
  role,
  onLogout,
  menuItems = [],
}: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* Name as trigger */}
        <button className="px-3 py-1 rounded hover:bg-primary/10 transition font-medium">
          {name}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 p-3 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* User info */}
        <div className="flex flex-col items-center mb-3">
          <span className="font-semibold text-gray-800">{name}</span>
          <span className="text-sm text-gray-500">{role}</span>
        </div>

        <div className="border-t border-gray-200 mb-2"></div>

        {/* Custom menu items */}
        {menuItems.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            onClick={item.onClick}
            className="flex items-center gap-2 hover:bg-primary/10 transition"
          >
            {item.label}
          </DropdownMenuItem>
        ))}

        {/* Default Logout */}
        <DropdownMenuItem
          onClick={onLogout}
          className="flex items-center gap-2 text-red-500 hover:bg-red-50 transition"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function HeaderUserMenu() {
  const auth = isAuthenticated();

  if (!auth) return null; // Not logged in

  return (
    <UserMenu
      name={auth.user.name}
      role={auth.user.role}
      onLogout={() => {
        Cookies.remove("token");
        Cookies.remove("user");
        window.location.href = "/";
      }}
      menuItems={[
        { label: "Profile", onClick: () => console.log("Go to profile") },
        { label: "Settings", onClick: () => console.log("Go to settings") },
      ]}
      imageUrl={auth.user.avatarUrl} // optional
    />
  );
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export function Header() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);
  const { isDark, toggleTheme } = useThemeStore();
  const auth = isAuthenticated();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.href = "/";
  };

  /* useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
 */
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/shop", label: t("nav.shop") },
    { to: "/categories", label: t("nav.categories") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-sm" : "bg-transparent"
      }`}
    > 
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display  text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
          >
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={
                  "text-m  font-medium transition-colors hover:text-primary "
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="hidden md:block overflow-hidden"
                >
                  <Input
                    placeholder={t("nav.search")}
                    className="h-9 bg-secondary/50 border-0"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={
                      i18n.language === lang.code ? "bg-secondary" : ""
                    }
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden md:flex"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Wishlist */} 
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {wishlistItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {cartItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User / Login */}
            {auth ? (
              <HeaderUserMenu />
            ) : (
              <Button
                variant="started"
                className="transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
                onClick={() => navigate("/register")}
              >
                Get started
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder={t("nav.search")} className="pl-10" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          location.pathname === link.to
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="border-t border-border pt-6 space-y-4">
                    <Link
                      to="/account"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <User className="h-5 w-5" />
                      {t("nav.account")}
                    </Link>

                    {/* Language */}
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-3 text-foreground w-full">
                        <Globe className="h-5 w-5" />
                        {t("common.language")}
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {languages.map((lang) => (
                          <DropdownMenuItem
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Theme */}
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-3 text-foreground w-full"
                    >
                      {isDark ? (
                        <>
                          <Sun className="h-5 w-5" />
                          {t("common.lightMode")}
                        </>
                      ) : (
                        <>
                          <Moon className="h-5 w-5" />
                          {t("common.darkMode")}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
