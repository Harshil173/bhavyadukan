import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function handleCheckout() {
    alert('Checkout completed!');
    clearCart();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} – ₹ {item.price}</p>
        </div>
      ))}
      <h2>Total: ₹ {total}</h2>
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
}
