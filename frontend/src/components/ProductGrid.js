import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: '2rem' }}>
      {products.map((p, idx) => (
        <ProductCard key={idx} product={p} />
      ))}
    </div>
  );
}
