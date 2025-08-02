import { useState, useEffect } from "react";
import Products from './Products.json';



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
function Header({ currentPage, onNavigate, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "category", label: "Shop" },
    { id: "contact", label: "Contact" },
    { id: "cart", label: "Cart" },
  ];

  return (
    <header
      style={{
        backgroundColor: COLOR_BEIGE,
        borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        fontFamily: "'Georgia', serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
        }}
      >
        {/* Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            fontSize: "1.5rem",
            border: "none",
            background: "none",
            color: COLOR_DARK_GREEN,
            cursor: "pointer",
          }}
          className="menu-toggle"
        >
          ☰
        </button>

        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          aria-label="Go to Home"
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <img
            src="/bhavyadukan.jpg"
            alt="Logo"
            style={{
              width: "40px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </button>


        {/* Cart */}
        <button
          onClick={() => onNavigate("cart")}
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
      </div>

      {/* Desktop Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          borderTop: `1px solid ${COLOR_LIGHT_GREEN}`,
          padding: "0.5rem 0",
        }}
      >
        <ul
          className="nav-links"
          style={{
            listStyle: "none",
            gap: "3rem",
            margin: 0,
            padding: 0,
          }}
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
                    currentPage === item.id
                      ? COLOR_GOLD
                      : COLOR_DARK_GREEN,
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
      </nav>

      {/* Mobile Dropdown: absolutely positioned BELOW header */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%", // ✅ appear below the header
            left: 0,
            right: 0,
            backgroundColor: COLOR_BEIGE,
            borderTop: `1px solid ${COLOR_LIGHT_GREEN}`,
            padding: "1rem",
            animation: "slideDown 0.3s ease forwards",
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
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: COLOR_DARK_GREEN,
                textAlign: "left",
                width: "100%",
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

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-links {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          .menu-toggle {
            display: none;
          }

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
    </header>
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
      
    </section>
  );
}

function ProductCard({ product, onAddToCart, isFeatured, onSelectProduct }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  // Calculate tag text if needed
  let offerTag = null;
  if (product.tag) {
    if (product.tag === "percent" && product.mrp && product.price) {
      const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
      offerTag = `${discount}% OFF`;
    } else {
      offerTag = product.tag;
    }
  }

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
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
      }}
      aria-label={`Product: ${product.name}`}
    >
      {/* ✅ Red Rectangle Tag */}
      {offerTag && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "red",
            color: "white",
            padding: "5px 8px",
            fontSize: "10px",
            fontWeight: "bold",
            borderRadius: "4px",
            zIndex: 2,
          }}
        >
          {offerTag}
        </div>
      )}

      {/* ✅ Product Image */}
      <div
        onClick={() => {
          if (onSelectProduct) onSelectProduct(product);
        }}
        style={{ cursor: "pointer" }}
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
      </div>

      {product.variants && (
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          style={{
            marginBottom: 8,
            padding: "0.25rem",
            borderRadius: 4,
            border: `1px solid ${COLOR_LIGHT_GREEN}`,
            backgroundColor: COLOR_BEIGE,
            fontFamily: "'Georgia', serif",
          }}
        >
          {product.variants.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {/* ✅ Price Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          color: COLOR_DARK_GREEN,
        }}
      >
        <div>
          <span style={{ textDecoration: "line-through", marginRight: 8 }}>
            ${product.mrp?.toFixed(2)}
          </span>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() =>
            onAddToCart({
              ...product,
              selectedVariant: selectedVariant || null,
            })
          }
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
    <div
      aria-label="Product categories"
      style={{
        margin: "3rem auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5rem",
        maxWidth: 960,
        userSelect: "none",
      }}
    >
      {categories.map((cat) => {
        const hasImage = !!cat.image;

        return (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            style={{
              backgroundColor: COLOR_WHITE,
              borderRadius: 8,
              padding: "1rem",
              boxShadow: "0 1px 5px rgba(150,140,125,0.1)",
              height: 220,
              fontFamily: "'Georgia', serif",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* ✅ Background Image */}
            {hasImage && (
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 6,
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}

            {/* ✅ Text overlay */}
            <h3
              style={{
                position: "relative",
                zIndex: 1,
                color: hasImage ? "white" : COLOR_DARK_GREEN,
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
                textShadow: hasImage
                  ? "1px 1px 4px rgba(0,0,0,0.8)"
                  : "none",
                padding: "0 1rem",
              }}
            >
              {cat.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}



function CategoryProductCard({ product, onAddToCart, onSelectProduct }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  // Calculate tag text
  let offerTag = null;
  if (product.tag) {
    if (product.tag === "percent" && product.mrp && product.price) {
      const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
      offerTag = `${discount}% OFF`;
    } else {
      offerTag = product.tag;
    }
  }

  return (
    <article
      style={{
        backgroundColor: COLOR_WHITE,
        borderRadius: 8,
        padding: "1rem",
        boxShadow: "0 1px 5px rgba(150,140,125,0.1)",
        width: "90%",
        height: "90%",
        fontFamily: "'Georgia', serif",
        userSelect: "none",
        position: "relative",
      }}
      aria-label={`Category product: ${product.name}`}
    >
      {/* ✅ Red Rectangle Tag */}
      {offerTag && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "red",
            color: "white",
            padding: "5px 8px",
            fontSize: "10px",
            fontWeight: "bold",
            borderRadius: "4px",
            zIndex: 2,
          }}
        >
          {offerTag}
        </div>
      )}

      {/* ✅ CLICKABLE IMAGE + NAME */}
      <div
        onClick={() => onSelectProduct && onSelectProduct(product)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={product.image}
          alt={product.name + " product image"}
          style={{
            width: "100%",
            borderRadius: 6,
            objectFit: "cover",
            height: 180,
          }}
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
      </div>

      {/* ✅ DESCRIPTION */}
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

      {/* ✅ DROPDOWN */}
      {product.variants && product.variants.length > 0 && (
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          style={{
            margin: "0.5rem 0",
            padding: "0.4rem",
            borderRadius: 4,
            border: `1px solid ${COLOR_LIGHT_GREEN}`,
            fontFamily: "'Georgia', serif",
          }}
        >
          {product.variants.map((variant, i) => (
            <option key={i} value={variant}>
              {variant}
            </option>
          ))}
        </select>
      )}

      {/* ✅ PRICE + ADD TO CART */}
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
        <div>
          <span style={{ textDecoration: "line-through", marginRight: 8 }}>
            ${product.mrp?.toFixed(2)}
          </span>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() =>
            onAddToCart({
              ...product,
              selectedVariant: selectedVariant || null,
            })
          }
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
      </address>
      
    </section>
  );
}

function CategoryPage({
  categoryId,
  categories, // ✅ add this
  onAddToCart,
  onBack,
  products,
  onSelectProduct,
}) {
  let filtered = products;
  if (categoryId && categoryId !== "all") {
    filtered = products.filter((p) => p.category === categoryId);
  }

  // ✅ Find the actual name
  const categoryName = categories.find((c) => c.id === categoryId)?.name || "Products";

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
          backgroundColor: COLOR_DARK_GREEN,
          color: COLOR_BEIGE,
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
        {categoryName}
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
            <CategoryProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}
    </main>
  );
}



function ProductDetailPage({ product, onAddToCart, onBack }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  if (!product) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button
          onClick={onBack}
          style={{
            marginTop: "1rem",
            border: "1px solid",
            borderRadius: 4,
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontFamily: "'Georgia', serif",
          }}
        >
          ← Back
        </button>
      </main>
    );
  }

  return (
    <main
      style={{
        flex: "1",
        maxWidth: 960,
        margin: "2rem auto",
        padding: "0 1rem",
        backgroundColor: COLOR_WHITE,
        borderRadius: 8,
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
        fontFamily: "'Georgia', serif",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: `1px solid ${COLOR_DARK_GREEN}`,
          borderRadius: 4,
          padding: "0.4rem 0.8rem",
          cursor: "pointer",
          marginBottom: "1rem",
          color: COLOR_DARK_GREEN,
        }}
      >
        ← Back to Products
      </button>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: 400,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: "1rem",
          backgroundColor: COLOR_LIGHT_GREEN,
        }}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/800x400?text=Image+not+available";
        }}
      />

      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "0.5rem",
          color: COLOR_DARK_GREEN,
        }}
      >
        {product.name}
      </h1>

      <h2 style={{ color: COLOR_DARK_GREEN, marginBottom: "1rem" }}>
        ${product.price.toFixed(2)}
      </h2>

      <p
        style={{
          lineHeight: 1.6,
          fontSize: "1rem",
          marginBottom: "1.5rem",
          color: COLOR_DARK_GREEN + "cc",
        }}
      >
        {product.description ||
          "No description available for this product at the moment."}
      </p>

      {/* ✅ DROPDOWN if variants exist */}
      {product.variants && product.variants.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="variant" style={{ display: "block", marginBottom: 4 }}>
            Choose a variant:
          </label>
          <select
            id="variant"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: 4,
              border: `1px solid ${COLOR_DARK_GREEN}`,
              fontFamily: "'Georgia', serif",
            }}
          >
            {product.variants.map((variant, i) => (
              <option key={i} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={() =>
          onAddToCart({
            ...product,
            selectedVariant: selectedVariant || null,
          })
        }
        style={{
          backgroundColor: COLOR_DARK_GREEN,
          color: COLOR_BEIGE,
          border: "none",
          borderRadius: 6,
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        + Add to Cart
      </button>
    </main>
  );
}


function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#064420",
        color: "#FFF8E7",
        padding: "2rem 1rem",
        fontFamily: "'Georgia', serif",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        {/* Quick Links */}
        <div style={{ flex: "1 1 180px", minWidth: "180px" }}>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Home</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Shop</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Categories</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Cart</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Checkout</a></li>
          </ul>
        </div>

        {/* Information */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
            Information
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Contact Us</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>Terms & Conditions</a></li>
            <li><a href="#" style={{ color: "#FFF8E7", textDecoration: "none" }}>FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 180px", minWidth: "200px" }}>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
            Contact Us
          </h4>
          <p style={{ margin: 0, lineHeight: "1.8" }}>
          
            📞 +91 123-456-7890<br />
            <a
            href="mailto:contact@bhavyadukan.com"
            style={{ color: "#FFF8E7", textDecoration: "underline" }}
          >
            ✉️contact@bhavyadukan.com</a>
          </p>
        </div>

        {/* Social */}
        <div style={{ flex: "1 1 180px", minWidth: "180px" }}>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
            Follow Us
          </h4>
          <div style={{ display: "flex", gap: "1rem", fontSize: "1.5rem" }}>
            <a href="#" aria-label="Facebook" style={{ color: "#FFF8E7" }}>🌐</a>
            <a href="#" aria-label="Instagram" style={{ color: "#FFF8E7" }}>📸</a>
            <a href="#" aria-label="Twitter" style={{ color: "#FFF8E7" }}>🐦</a>
            <a href="#" aria-label="LinkedIn" style={{ color: "#FFF8E7" }}>💼</a>
          </div>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.85rem",
          color: "#FFF8E7aa",
        }}
      >
        © {new Date().getFullYear()} BhavyaDukan. All rights reserved.

      </p>
    </footer>
  );
}


function CartPage({ cartItems, onBuyNow, onBack }) {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "'Georgia', serif",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: COLOR_DARK_GREEN }}>
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={`${item.id}-${item.selectedVariant || "default"}`}
              style={{
                borderBottom: `1px solid ${COLOR_LIGHT_GREEN}`,
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 4px", color: COLOR_DARK_GREEN }}>
                  {item.name}
                </h3>
                {item.selectedVariant && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: COLOR_DARK_GREEN + "aa",
                    }}
                  >
                    <strong>{item.selectedVariant}</strong>
                  </p>
                )}
                <p style={{ margin: "4px 0 0" }}>
                  Qty: {item.qty} × ${item.price.toFixed(2)}
                </p>
              </div>
              <span style={{ fontWeight: "bold", color: COLOR_DARK_GREEN }}>
                ${(item.qty * item.price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={onBuyNow}
          style={{
            backgroundColor: COLOR_DARK_GREEN,
            color: COLOR_BEIGE,
            border: "none",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Proceed to Checkout
        </button>

        <button
          onClick={onBack}
          style={{
            marginLeft: "1rem",
            background: "none",
            border: `1px solid ${COLOR_DARK_GREEN}`,
            color: COLOR_DARK_GREEN,
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Back
        </button>
      </div>
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
  const [products, setProducts] = useState(Products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Fetch Strapi
  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((res) => {
        if (!res.ok) throw new Error("Strapi offline");
        return res.json();
      })
      .then((data) => {
        const strapiProducts = data.data.map((item) => ({
          id: item.id,
          name: item.Name,
          price: item.Price,
          category: item.Category,
          description:
            item.Description?.[0]?.children?.[0]?.text || "No description",
          image: item.Image?.formats?.medium?.url
            ? `http://localhost:1337${item.Image.formats.medium.url}`
            : "https://placehold.co/300x200?text=No+Image",
          variants: item.Variants || null,
        }));

        const merged = Products.map((jsonProd) => {
          const match = strapiProducts.find((sp) => sp.id === jsonProd.id);
          return match ? match : jsonProd;
        });

        strapiProducts.forEach((sp) => {
          if (!merged.find((m) => m.id === sp.id)) {
            merged.push(sp);
          }
        });

        setProducts(merged);
      })
      .catch((err) => {
        console.warn("Strapi fetch failed. Using fallback JSON.", err);
        setProducts(Products);
      });
  }, []);

  // ✅ Cart functions
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
    setPage("category");
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

  function backToCart() {
    setPage("cart");
  }

  return (
    <div
      style={{
        backgroundColor: COLOR_BEIGE,
        minHeight: "100vh",
        minWidth: "100vw",
        overflowX: "hidden",
        color: COLOR_TEXT,
        fontFamily: "'Georgia', serif",
        scrollBehavior: "smooth",
      }}
    >
      {/* ✅ USE NEW COMBINED HEADER */}
      <Header
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
                  onSelectProduct={(p) => {
                    setSelectedProduct(p);
                    setPage("productDetail");
                  }}
                />
              ))}
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
                {selectedCategory === "all"
                  ? "All Products"
                  : selectedCategory}
              </h2>

              {products.filter(
                (p) =>
                  selectedCategory === "all" ||
                  p.category === selectedCategory
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
                          onSelectProduct={(p) => {
                            setSelectedProduct(p);
                            setPage("productDetail");
                          }}
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
            onSubmit={(data) =>
              alert("Message sent:\n" + JSON.stringify(data, null, 2))
            }
          />
        </>
      )}

      {page === "productDetail" && (
        <ProductDetailPage
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={backToHome}
        />
      )}

      {page === "category" && (
        <CategoryPage
          categoryId={selectedCategory}
          categories={categoriesList}
          products={products}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => {
            setSelectedProduct(p);
            setPage("productDetail");
          }}
          onBack={backToHome}
        />
      )}

      {page === "cart" && (
        <CartPage
          cartItems={cart}
          onBuyNow={handleBuyNow}
          onBack={backToHome}
        />
      )}

      {page === "checkout" && (
        <CheckoutPage cartItems={cart} onBack={backToCart} />
      )}

      <Footer />
    </div>
  );
}







export default App;

