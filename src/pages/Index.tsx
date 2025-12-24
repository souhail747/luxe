import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Categories } from '@/components/home/Categories';
import { NewCategories } from '@/components/home/NewCategories';
import { Features } from '@/components/home/Features';
import { Newsletter } from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <NewCategories />
      <Newsletter />
    </Layout>
  );
};

export default Index;
