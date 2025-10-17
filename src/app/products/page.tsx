
import { ProductsPageClient } from './_components/products-page-client';
import { getProducts } from '@/app/actions/product-actions';

export default async function ProductsPage() {
  const initialProducts = await getProducts();

  return (
    <ProductsPageClient initialProducts={initialProducts} />
  );
}
