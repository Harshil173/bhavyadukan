import { useState, useEffect } from "react";

const COLOR_DARK_GREEN = "#264832";
const COLOR_LIGHT_GREEN = "#c5d4ca";
const COLOR_BEIGE = "#ede9df";
const COLOR_GOLD = "#b69868";
const COLOR_TEXT = "#264832";
const COLOR_WHITE = "#F6F4F0";
const categoriesList = [
  { id: "all", name: "All" },
  { id: "truffles", name: "Truffles" },
  { id: "chanterelles", name: "Chanterelles" },
  { id: "morels", name: "Morels" },
];

// Sample products data for demonstration



// const products = [
//   {
//     id: 1,
//     name: "Soumya Foods- Hot &",
//     category: "truffles",
//     price: 45,
//     image:
//       "https://m.media-amazon.com/images/I/714M-zoQeSL._SX679_.jpg",
//   },
//   {
//     id: 2,
//     name: "Black Truffle",
//     category: "truffles",
//     price: 120,
//     image:
//       "https://placehold.co/300x200/pink/white?text=Black+Truffle",
//   },
//   {
//     id: 3,
//     name: "Mushroom Masala",
//     category: "morels",
//     price: 60,
//     image:
//       "https://placehold.co/500x300/beige/5a4b41?text=Mushroom+Masala",
//     description: "A rich and earthy flavor perfect for gourmet dishes.",
//   },
// ];

// const products = [
  
// ];




// Cart context to handle add to cart and cart state?
// Since requirements are small, use lifting state to App level

function Header({ cartCount, onMenuClick, onCartClick }) {
  return (
    <header
      style={{
        backgroundColor: COLOR_BEIGE,
        borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Georgia', serif",
      }}
    >
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        style={{
          fontSize: "1.5rem",
          border: "none",
          background: "none",
          color: COLOR_DARK_GREEN,
          cursor: "pointer",
          fontWeight: 700,
          width: 48,
          height: 48,
          lineHeight: 1,
        }}
      >
        &#9776;
      </button>
      <div
        style={{
          fontWeight: "bold",
          color: COLOR_DARK_GREEN,
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <img
          src="/bhavyadukan.jpg" // Replace this path with your actual logo path
          alt="Logo"
          style={{
            width: 200,
            height: 150,
            objectFit: "fill",
            marginRight: 0,
            fontSize:10
          }}
        />
      </div>
      <button
        onClick={onCartClick}
        aria-label="Open cart"
        style={{
          fontSize: "1.5rem",
          border: "none",
          background: "none",
          color: COLOR_DARK_GREEN,
          cursor: "pointer",
          position: "relative",
          width: 48,
          height: 48,
          right:10,
          lineHeight: 1,
        }}
      >
        🛒
        {cartCount > 0 && (
          <span
            aria-label={`${cartCount} items in cart`}
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              backgroundColor: COLOR_GOLD,
              color: COLOR_DARK_GREEN,
              borderRadius: "50%",
              padding: "0 6px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}

function Navbar({ currentPage, onNavigate, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "category", label: "Shop" },
    { id: "contact", label: "Contact" },
    { id: "cart", label: "Cart" },
  ];

  return (
    <nav
  style={{
    backgroundColor: COLOR_BEIGE,
    borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
    padding: "0.5rem 1rem",
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "'Georgia', serif",
  }}
> 
  {/* Centered Menu */}
  <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "5rem",
        margin: 0,
        padding: 0,
      }}
      className="nav-links"
    >
      {navItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onNavigate(item.id)}
            aria-current={currentPage === item.id ? "page" : undefined}
            style={{
              background: "none",
              border: "none",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              color:
                currentPage === item.id ? COLOR_GOLD : COLOR_DARK_GREEN,
              borderBottom:
                currentPage === item.id
                  ? `2px solid ${COLOR_GOLD}`
                  : "2px solid transparent",
              paddingBottom: 2,
            }}
          >
            {item.label}
            {item.id === "cart" && cartCount > 0 && (
              <span
                style={{
                  marginLeft: 6,
                  backgroundColor: COLOR_GOLD,
                  color: COLOR_DARK_GREEN,
                  borderRadius: "50%",
                  padding: "0 6px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  </div>

  {/* Mobile Menu Toggle */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    style={{
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      color: COLOR_DARK_GREEN,
      cursor: "pointer",
      display: "none",
    }}
    className="menu-toggle"
  >
    ☰
  </button>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: COLOR_BEIGE,
        borderTop: `1px solid ${COLOR_LIGHT_GREEN}`,
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        zIndex: 99,
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onNavigate(item.id);
            setMenuOpen(false);
          }}
          style={{
            background: "none",
            border: "none",
            padding: "0.5rem 0",
            fontSize: "1rem",
            fontWeight: "600",
            color: COLOR_DARK_GREEN,
            textAlign: "left",
          }}
        >
          {item.label}
          {item.id === "cart" && cartCount > 0 && (
            <span
              style={{
                marginLeft: 6,
                backgroundColor: COLOR_GOLD,
                color: COLOR_DARK_GREEN,
                borderRadius: "50%",
                padding: "0 6px",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
      ))}
    </div>
  )}

  {/* Responsive styles */}
  <style>
    {`
      @media (max-width: 768px) {
        .menu-toggle {
          display: block;
        }
        .nav-links {
          display: none;
        }
      }
    `}
  </style>
</nav>

  );
}


function HeroSection({ onShopNow }) {
  return (
    <section
      style={{
        position: "relative",
        color: COLOR_DARK_GREEN,
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundImage:
          "url('https://images.pexels.com/photos/18787628/pexels-photo-18787628.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero banner with mushroom pattern background"
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          textShadow:
            "0 1px 0 rgba(255 255 255 / 0.7), 0 -1px 0 rgba(255 255 255 / 0.7)",
          marginBottom: "1.5rem",
          userSelect: "none",
        }}
      >
        Discover the Luxury of Nature
      </h1>
      <button
        onClick={onShopNow}
        style={{
          backgroundColor: COLOR_GOLD,
          border: "none",
          padding: "0.75rem 2rem",
          borderRadius: "2rem",
          fontWeight: "600",
          fontSize: "1rem",
          cursor: "pointer",
          color: COLOR_DARK_GREEN,
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          userSelect: "none",
        }}
        aria-label="Shop Now button"
      >
        Shop Now
      </button>
    </section>
  );
}


function ProductCard({ product, onAddToCart, isFeatured }) {
  return (
    <article
      style={{
        border: `1px solid ${COLOR_LIGHT_GREEN}`,
        borderRadius: 10,
        padding: isFeatured ? "1rem" : "0.5rem",
        marginRight: 15,
        minWidth: isFeatured ? 280 : 230,
        backgroundColor: COLOR_WHITE,
        boxShadow: isFeatured ? "0 0 5px rgba(0,0,0,0.1)" : "none",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
      aria-label={`Product: ${product.name}, price $${product.price}`}
    >
      <img
        src={product.image}
        alt={product.name + " product image"}
        style={{
          width: "100%",
          height: isFeatured ? 160 : 110,
          borderRadius: "8px",
          objectFit: "cover",
          marginBottom: 8,
          backgroundColor: COLOR_LIGHT_GREEN,
          flexShrink: 0,
        }}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/300x200?text=Image+not+available&bg=cccccc&fg=777777";
        }}
      />
      <h3
        style={{
          fontWeight: "bold",
          fontSize: isFeatured ? "1.1rem" : "0.95rem",
          color: COLOR_DARK_GREEN,
          marginBottom: 4,
          flexGrow: 1,
        }}
      >
        {product.name}
      </h3>
      {isFeatured && product.description && (
        <p
          style={{
            fontSize: "0.8rem",
            marginBottom: 6,
            color: COLOR_DARK_GREEN + "cc",
          }}
        >
          {product.description}
        </p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          color: COLOR_DARK_GREEN,
        }}
      >
        <span>${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          style={{
            border: "none",
            backgroundColor: COLOR_DARK_GREEN,
            color: COLOR_BEIGE,
            width: 28,
            height: 28,
            borderRadius: "50%",
            fontSize: "1.3rem",
            lineHeight: "24px",
            cursor: "pointer",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          +
        </button>
      </div>
    </article>
  );
}

function SeeAllProductsButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "1.5rem auto",
        backgroundColor: COLOR_GOLD,
        border: "none",
        borderRadius: "2rem",
        padding: "0.75rem 2rem",
        fontWeight: "600",
        fontSize: "1rem",
        color: COLOR_DARK_GREEN,
        cursor: "pointer",
        userSelect: "none",
        display: "block",
        width: "fit-content",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      }}
      aria-label="See all products"
    >
      See all Products
    </button>
  );
}

function CategoriesNav({ categories, selectedCategory, onSelectCategory }) {
  return (
    <nav
      aria-label="Product categories"
      style={{
        margin: "2.5rem 0 1rem 0",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        userSelect: "none",
      }}
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            aria-current={isSelected ? "true" : undefined}
            style={{
              background: "none",
              border: "none",
              borderBottom: isSelected
                ? `3px solid ${COLOR_GOLD}`
                : "3px solid transparent",
              color: isSelected ? COLOR_GOLD : COLOR_DARK_GREEN,
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "1rem",
              padding: "0 8px 6px 8px",
              userSelect: "none",
            }}
          >
            {cat.name}
          </button>
        );
      })}
    </nav>
  );
}

function CategoryProductCard({ product, onAddToCart }) {
  return (
    <article
      style={{
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: "1rem",
    boxShadow: "0 1px 5px rgba(150,140,125,0.1)",
    width: "90%", // ✅ for grid layout
    height: "90%",
    fontFamily: "'Georgia', serif",
    userSelect: "none",
  }}
      aria-label={`Category product: ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.name + " product image"}
        style={{ width: "100%", borderRadius: 6, objectFit: "cover", height: 180 }}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/480x180?text=Image+not+available&bg=cccccc&fg=777777";
        }}
      />
      <h3
        style={{
          marginTop: "0.75rem",
          fontWeight: "bold",
          fontSize: "1.1rem",
          color: COLOR_DARK_GREEN,
        }}
      >
        {product.name}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: 6,
          marginBottom: 6,
          color: COLOR_DARK_GREEN + "cc",
        }}
      >
        {product.description || (
          <em style={{ fontStyle: "italic" }}>Description missing</em>
        )}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          color: COLOR_DARK_GREEN,
          marginTop: 6,
        }}
      >
        <span>${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart(product)}
          style={{
            backgroundColor: COLOR_DARK_GREEN,
            color: COLOR_BEIGE,
            border: "none",
            borderRadius: 6,
            padding: "0.3rem 0.8rem",
            cursor: "pointer",
            userSelect: "none",
            fontWeight: "bold",
          }}
          aria-label={`Add ${product.name} to cart`}
        >
          + Add to Cart
        </button>
      </div>
    </article>
  );
}

function OurStorySection() {
  return (
    <section
      style={{
        fontFamily: "'Georgia', serif",
        color: COLOR_DARK_GREEN,
        maxWidth: 600,
        margin: "2.5rem auto",
        padding: "1rem 1rem 3rem",
        userSelect: "none",
      }}
      aria-label="Our Story section"
    >
      <img
        src="https://placehold.co/800x300/beige/5a4b41?text=Mushroom+Health+Masala+packaging+and+powder+on+wood+table+nature+background"
        alt="Mushroom Health Masala packaging with powder porridge bowl on a wooden table and natural nature background in warm tones"
        style={{ width: "100%", borderRadius: 8, objectFit: "cover", marginBottom: 16 }}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/800x300?text=Image+not+available&bg=cccccc&fg=777777";
        }}
      />
      <div>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            marginBottom: "0.75rem",
          }}
        >
          Our Story
        </h2>
        <p style={{ marginBottom: "1rem", lineHeight: 1.5 }}>
          Founded on a passion for quality, BhavyaDukan brings you the finest mushrooms sourced from the world's most pristine forests.
        </p>
        <ul style={{ marginLeft: "1rem", lineHeight: 1.5, paddingLeft: "1rem" }}>
          <li>2001: BhavyaDukan was born in the heart of nature.</li>
          <li>2005: Expansion into luxury truffle markets.</li>
        </ul>
      </div>
    </section>
  );
}

function WhyMushroomsSection() {
  return (
    <section
      style={{
        backgroundColor: COLOR_BEIGE,
        padding: "2rem",
        maxWidth: 850,
        margin: "2rem auto",
        borderRadius: 12,
        userSelect: "none",
      }}
      aria-label="Why Mushrooms section"
    >
      <h2
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: "700",
          fontSize: "1.6rem",
          color: COLOR_DARK_GREEN,
          textAlign: "center",
          marginBottom: "1.25rem",
        }}
      >
        Why Mushrooms
      </h2>
      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <article
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0 0 5px rgba(0,0,0,0.08)",
            padding: "1rem",
            width: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: COLOR_DARK_GREEN,
          }}
          aria-label="Rarity feature highlight"
        >
          <div
            aria-hidden="true"
            style={{
              fontSize: 36,
              marginBottom: 12,
              color: COLOR_GOLD,
            }}
          >
            🍄
          </div>
          <h3
            style={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: 8 }}
          >
            Rarity
          </h3>
          <p style={{ fontSize: "0.9rem", textAlign: "center", lineHeight: 1.3 }}>
            We offer rarest mushrooms found in nature.
          </p>
        </article>
        <article
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0 0 5px rgba(0,0,0,0.08)",
            padding: "1rem",
            width: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: COLOR_DARK_GREEN,
          }}
          aria-label="Power feature highlight"
        >
          <div
            aria-hidden="true"
            style={{
              fontSize: 36,
              marginBottom: 12,
              color: COLOR_GOLD,
            }}
          >
            💎
          </div>
          <h3
            style={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: 8 }}
          >
            Power
          </h3>
          <p style={{ fontSize: "0.9rem", textAlign: "center", lineHeight: 1.3 }}>
            Our products are exclusive and refined.
          </p>
        </article>
      </div>
    </section>
  );
}

function ContactUsSection({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      onSubmit(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill all fields before sending message.");
    }
  }

  return (
    <section
      style={{
        maxWidth: 480,
        margin: "2rem auto 3rem",
        padding: "1rem 1rem",
        color: COLOR_DARK_GREEN,
        fontFamily: "'Georgia', serif",
        userSelect: "none",
      }}
      aria-label="Contact Us section"
    >
      <h2
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          marginBottom: 18,
          color: COLOR_DARK_GREEN,
          textAlign: "center",
        }}
      >
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} aria-live="polite" aria-describedby="contact-status">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: 6,
            border: `1px solid ${COLOR_DARK_GREEN}`,
            fontSize: "1rem",
            fontFamily: "'Georgia', serif",
            userSelect: "text",
            color: COLOR_DARK_GREEN,
          }}
          aria-label="Your Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: 6,
            border: `1px solid ${COLOR_DARK_GREEN}`,
            fontSize: "1rem",
            fontFamily: "'Georgia', serif",
            userSelect: "text",
            color: COLOR_DARK_GREEN,
          }}
          aria-label="Your Email"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: 6,
            border: `1px solid ${COLOR_DARK_GREEN}`,
            fontSize: "1rem",
            fontFamily: "'Georgia', serif",
            userSelect: "text",
            resize: "vertical",
            color: COLOR_DARK_GREEN,
          }}
          aria-label="Your Message"
        />
        <button
          type="submit"
          style={{
            backgroundColor: COLOR_DARK_GREEN,
            color: COLOR_BEIGE,
            border: "none",
            borderRadius: "20px",
            padding: "0.75rem 3rem",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "1rem",
            userSelect: "none",
            display: "block",
            margin: "0 auto",
            width: "fit-content",
          }}
          aria-label="Send Message"
        >
          Send Message
        </button>
      </form>
      {submitted && (
        <p
          id="contact-status"
          style={{
            marginTop: "1rem",
            color: COLOR_GOLD,
            fontWeight: "bold",
            textAlign: "center",
          }}
          role="alert"
        >
          Thank you! Your message has been sent.
        </p>
      )}
      <address
        style={{
          marginTop: "3rem",
          fontStyle: "normal",
          fontSize: "0.9rem",
          color: COLOR_DARK_GREEN,
          lineHeight: 1.4,
          userSelect: "text",
          textAlign: "center",
        }}
      >
        
        <p>
          <a
            href="mailto:contact@bhavyadukan.com"
            style={{ color: COLOR_DARK_GREEN, textDecoration: "underline" }}
          >
            contact@bhavyadukan.com
          </a>
        </p>
        <p>(123) 456-7890</p>
        <p style={{ marginTop: 16 }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              marginRight: 12,
              color: COLOR_DARK_GREEN,
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.25rem",
              userSelect: "none",
            }}
          >
            F
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            style={{
              color: COLOR_DARK_GREEN,
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.25rem",
              userSelect: "none",
            }}
          >
            T
          </a>
        </p>
      </address>
      <p
        style={{
          marginTop: 20,
          fontSize: "0.8rem",
          color: COLOR_DARK_GREEN + "cc",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        © 2023 BhavyaDukan. All rights reserved.
      </p>
    </section>
  );
}

function CategoryPage({ categoryId, onAddToCart, onBack, products }) {
  let filtered = products;
  if (categoryId && categoryId !== "all") {
    filtered = products.filter((p) => p.category === categoryId);
  }

  return (
    <main
      style={{
        padding: "1rem",
        maxWidth: 960,
        margin: "0 auto 3rem",
        userSelect: "none",
      }}
      aria-label={`Category page: ${categoryId}`}
    >
      <button
        style={{
          marginBottom: "2rem",
          border: "none",
          backgroundColor: "#FFD700",
          color: "#064420",
          borderRadius: 20,
          padding: "0.5rem 1.2rem",
          cursor: "pointer",
          fontWeight: "600",
          userSelect: "none",
        }}
        onClick={onBack}
        aria-label="Back to homepage"
      >
        &lt; Back
      </button>
      <h2
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: "bold",
          color: "#064420",
          marginBottom: "1rem",
          fontSize: "1.75rem",
          textTransform: "capitalize",
        }}
      >
        {categoryId === "all" ? "All Products" : categoryId}
      </h2>

      {filtered.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((p) => (
            <CategoryProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </main>
  );
}



function CartPage({ cartItems, onBuyNow, onBack }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "2rem auto 4rem",
        padding: "0 1rem",
        userSelect: "none",
        fontFamily: "'Georgia', serif",
        color: COLOR_DARK_GREEN,
      }}
      aria-label="Cart page"
    >
      <button
        style={{
          marginBottom: "1.5rem",
          border: "none",
          backgroundColor: COLOR_GOLD,
          color: COLOR_DARK_GREEN,
          borderRadius: 20,
          padding: "0.5rem 1.2rem",
          cursor: "pointer",
          fontWeight: "600",
          userSelect: "none",
        }}
        onClick={onBack}
        aria-label="Back to homepage"
      >
        &lt; Back
      </button>
      <h2 style={{ fontWeight: "bold", fontSize: "1.75rem" }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.75rem 0",
                  borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <div>
                    Qty: {item.qty} × ${item.price.toFixed(2)}
                  </div>
                </div>
                <div style={{ fontWeight: "600" }}>
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              fontWeight: "bold",
              fontSize: "1.15rem",
              textAlign: "right",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={onBuyNow}
            style={{
              display: "block",
              width: "100%",
              marginTop: 18,
              padding: "1rem",
              backgroundColor: COLOR_DARK_GREEN,
              color: COLOR_BEIGE,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "1.2rem",
              userSelect: "none",
            }}
            aria-label="Proceed to checkout"
          >
            Buy Now
          </button>
        </>
      )}
    </main>
  );
}

function CheckoutPage({ cartItems, onBack }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  // Missing checkout form or payment integrations, we create placeholder

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "2rem auto 4rem",
        padding: "0 1rem",
        userSelect: "none",
        fontFamily: "'Georgia', serif",
        color: COLOR_DARK_GREEN,
      }}
      aria-label="Checkout page"
    >
      <button
        style={{
          marginBottom: "1.5rem",
          border: "none",
          backgroundColor: COLOR_GOLD,
          color: COLOR_DARK_GREEN,
          borderRadius: 20,
          padding: "0.5rem 1.2rem",
          cursor: "pointer",
          fontWeight: "600",
          userSelect: "none",
        }}
        onClick={onBack}
        aria-label="Back to cart"
      >
        &lt; Back
      </button>
      <h2 style={{ fontWeight: "bold", fontSize: "1.75rem", marginBottom: 12 }}>
        Checkout
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: 20 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.75rem 0",
                  borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
                }}
              >
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
              textAlign: "right",
              marginBottom: 40,
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
          <article
            style={{
              backgroundColor: COLOR_BEIGE,
              borderRadius: 10,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 0 7px rgba(0,0,0,0.1)",
              userSelect: "none",
            }}
          >
            <h3 style={{ marginBottom: 10 }}>Checkout Form Placeholder</h3>
            <p style={{ marginBottom: 20, color: COLOR_DARK_GREEN + "aa" }}>
              Checkout form integration is missing in this demo UI.
            </p>
            <button
              style={{
                backgroundColor: COLOR_GOLD,
                border: "none",
                padding: "0.75rem 2rem",
                borderRadius: "2rem",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "not-allowed",
                color: COLOR_DARK_GREEN,
                userSelect: "none",
                opacity: 0.5,
              }}
              disabled
              aria-label="Confirm purchase disabled"
            >
              Confirm Purchase
            </button>
          </article>
        </>
      )}
    </main>
  );
}







function App() {
  const [page, setPage] = useState("home"); // home, category, cart, checkout
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const staticProducts = [
    {
      id: 1,
      name: "Soumya Foods- Hot &",
      category: "truffles",
      price: 45,
      image: "https://m.media-amazon.com/images/I/714M-zoQeSL._SX679_.jpg",
    },
    {
      id: 2,
      name: "Black Truffle",
      category: "truffles",
      price: 120,
      image: "https://placehold.co/300x200/pink/white?text=Black+Truffle",
    },
    {
      id: 3,
      name: "Mushroom Masala",
      category: "morels",
      price: 60,
      image: "https://placehold.co/500x300/beige/5a4b41?text=Mushroom+Masala",
      description: "A rich and earthy flavor perfect for gourmet dishes.",
    },
  ];

  const [products, setProducts] = useState(staticProducts);

  useEffect(() => {

    fetch("http://localhost:1337/api/products?populate=*")
      .then((res) => res.json())
      .then((data) => {
        const strapiProducts = data.data.map((item) => ({
          id: item.id,
          name: item.Name,
          price: item.Price,
          category: item.Category,
          description: item.Description?.[0]?.children?.[0]?.text || "No description",
          image: item.Image?.formats?.medium?.url
            ? `http://localhost:1337${item.Image.formats.medium.url}`
            : "https://placehold.co/300x200?text=No+Image",
        }));

        // ✅ Append to existing products
        setProducts((staticProducts) => [...staticProducts, ...strapiProducts]);
        const merged = [...staticProducts, ...strapiProducts];
        
        console.log("hello",merged);

      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);





  function handleAddToCart(product) {
    setCart((curr) => {
      const existing = curr.find((item) => item.id === product.id);
      if (existing) {
        return curr.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...curr, { ...product, qty: 1 }];
      }
    });
  }

  function handleShopNow() {
    setPage("category");
    setSelectedCategory("all");
  }

  function handleSeeAllProducts() {
    setPage("category");
    setSelectedCategory("all");
  }

  function handleSelectCategory(catId) {
    setSelectedCategory(catId);
  }

  function goToCart() {
    setPage("cart");
  }

  function handleBuyNow() {
    setPage("checkout");
  }

  function backToHome() {
    setPage("home");
  }

  function backToCategory() {
    setPage("category");
  }

  function backToCart() {
    setPage("cart");
  }

  return (
    <div
    style={{
    backgroundColor: COLOR_BEIGE,
    minHeight: "100vh",
    minWidth: "100vw",             // ✅ ensures full width on mobile
    overflowX: "hidden",           // ✅ prevents layout-breaking horizontal scroll
    color: COLOR_TEXT,
    fontFamily: "'Georgia', serif",
    scrollBehavior: "smooth",
  }}
    >
      <Header
        cartCount={cart.reduce((a, i) => a + i.qty, 0)}
        onMenuClick={() => alert("Menu functionality missing")}
        onCartClick={goToCart}
      />
      <Navbar
        currentPage={page}
        onNavigate={setPage}
        cartCount={cart.reduce((a, i) => a + i.qty, 0)}
      />
      {page === "home" && (
        <>
          <HeroSection onShopNow={handleShopNow} />
          <main
            style={{
              maxWidth: 960,
              margin: "1.5rem auto 2rem",
              padding: "0 1rem",
            }}
          >
            <h2
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                fontFamily: "'Georgia', serif",
                color: COLOR_DARK_GREEN,
                userSelect: "none",
              }}
            >
              Featured Products
            </h2>
            <div
              style={{
                display: "flex",
                overflowX: "auto",
                paddingBottom: 12,
              }}
              aria-label="Featured products horizontally scrollable"
            >
              {products.slice(0, 2).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isFeatured
                />
              ))}
              {/* If less than 2 products present, add placeholders */}
              {products.length < 2 &&
                [...Array(2 - products.length)].map((_, i) => (
                  <div
                    key={"missing" + i}
                    style={{
                      minWidth: 280,
                      minHeight: 250,
                      backgroundColor: COLOR_LIGHT_GREEN,
                      marginRight: 12,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "600",
                      color: COLOR_DARK_GREEN,
                      fontSize: 14,
                      fontFamily: "'Georgia', serif",
                    }}
                    aria-label="Missing featured product placeholder"
                  >
                    Missing Featured Product
                  </div>
                ))}
            </div>

            <SeeAllProductsButton onClick={handleSeeAllProducts} />

            <CategoriesNav
              categories={categoriesList}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            <div style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                fontFamily: "'Georgia', serif",
                color: COLOR_DARK_GREEN,
                userSelect: "none",
              }}
            >
              {selectedCategory === "all" ? "All Products" : selectedCategory}
            </h2>

            {products.filter(
              (p) =>
                selectedCategory === "all" || p.category === selectedCategory
            ).length === 0 ? (
              <p>No products available in this category.</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "1rem",
                  paddingBottom: 12,
                }}
                aria-label="Category products horizontally scrollable"
              >
                {products
                  .filter(
                    (p) =>
                      selectedCategory === "all" ||
                      p.category === selectedCategory
                  )
                  .map((product) => (
                    <div key={product.id} style={{ minWidth: 280 }}>
                      <CategoryProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
          </main>
          <OurStorySection />
          <WhyMushroomsSection />
          <ContactUsSection
            onSubmit={(data) => alert("Message sent:\n" + JSON.stringify(data, null, 2))}
          />
        </>
      )}

      {page === "category" && (
        <CategoryPage

        
          categoryId={"all"}
          onAddToCart={handleAddToCart}
          onBack={backToHome}
          products={products} 
        
        />

        
      )}

      {page === "cart" && (
        <CartPage cartItems={cart} onBuyNow={handleBuyNow} onBack={backToHome} />
      )}

      {page === "checkout" && (
        <CheckoutPage cartItems={cart} onBack={backToCart} />
      )}
    </div>
  );
}






export default App;

