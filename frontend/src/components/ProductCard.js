export default function ProductCard({ product }) {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 250 }}>
        <img
          src={product.image || '/placeholder.jpg'}
          alt={product.name}
          style={{ width: '100%', height: 200, objectFit: 'cover' }}
        />
        <h3>{product.name}</h3>
        <p>₹ {product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
  