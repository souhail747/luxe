import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

export default function Wishlist() {
  const { t } = useTranslation();
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    removeItem(item.id);
    toast.success(`${item.name} moved to cart`);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl font-medium mb-4">
                Your wishlist is empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Save items you love to your wishlist and revisit them anytime.
              </p>
              <Button asChild size="lg">
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <h1 className="font-display text-4xl font-medium">
              {t('nav.wishlist')} ({items.length})
            </h1>
            {items.length > 0 && (
              <Button variant="outline" onClick={clearWishlist}>
                Clear All
              </Button>
            )}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary/50">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Remove Button */}
                  <button
                    onClick={() => {
                      removeItem(item.id);
                      toast.success(`${item.name} removed from wishlist`);
                    }}
                    className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* Add to Cart Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="w-full gap-2"
                      size="sm"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      {t('products.addToCart')}
                    </Button>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="font-display text-lg font-semibold mt-1">
                    ${item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
