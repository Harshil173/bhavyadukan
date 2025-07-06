import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Your Cart</h1>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <a href="/checkout">
          <button>Proceed to Checkout</button>
        </a>
      )}
    </div>
  );
}
