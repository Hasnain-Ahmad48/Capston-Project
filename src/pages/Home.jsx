import React from "react";

const Home = () => {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "24px 20px",
      maxWidth: 1200,
      margin: "0 auto"
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 24,
      alignItems: "center",
      background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
      color: "#ffffff",
      borderRadius: 12,
      padding: 24
    },
    heroTitle: {
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: 8
    },
    heroSubtitle: {
      color: "#d1d5db",
      fontSize: 16,
      marginBottom: 16
    },
    heroCtas: {
      display: "flex",
      gap: 12
    },
    primaryBtn: {
      background: "#2563eb",
      color: "#ffffff",
      border: "none",
      padding: "10px 14px",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600
    },
    secondaryBtn: {
      background: "transparent",
      color: "#ffffff",
      border: "1px solid #374151",
      padding: "10px 14px",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600
    },
    heroImageWrap: {
      width: "100%",
      height: 260,
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #1f2937",
      background: "#0b1220"
    },
    heroImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 700
    },
    linkBtn: {
      border: "none",
      background: "transparent",
      color: "#2563eb",
      cursor: "pointer",
      fontWeight: 600
    },
    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    },
    card: {
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      overflow: "hidden",
      background: "#ffffff"
    },
    cardImage: {
      width: "100%",
      height: 140,
      objectFit: "cover",
      display: "block",
      background: "#f3f4f6"
    },
    cardBody: {
      padding: 12,
      display: "grid",
      gap: 6
    },
    priceRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    price: {
      fontWeight: 800,
      color: "#111827"
    },
    addBtn: {
      border: "1px solid #111827",
      background: "transparent",
      borderRadius: 6,
      padding: "6px 10px",
      cursor: "pointer",
      fontWeight: 600
    }
  };

  const featured = [
    {
      id: 1,
      title: "Premium Headphones",
      subtitle: "Crisp sound, all‑day comfort",
      price: "$199",
      img: "https://images.unsplash.com/photo-1518444028785-8b1e0ae529a2?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Smart Watch",
      subtitle: "Track fitness and notifications",
      price: "$149",
      img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Wireless Speaker",
      subtitle: "Big sound in a small body",
      price: "$129",
      img: "https://images.unsplash.com/photo-1512446816042-444d641267ee?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Your favorite products, delivered with speed</h1>
          <p style={styles.heroSubtitle}>Discover curated collections and exclusive deals tailored for you.</p>
          <div style={styles.heroCtas}>
            <button style={styles.primaryBtn}>Shop New Arrivals</button>
            <button style={styles.secondaryBtn}>Browse Categories</button>
          </div>
        </div>
        <div style={styles.heroImageWrap}>
          <img
            style={styles.heroImage}
            alt="Featured products collage"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </section>

      <section>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Featured Picks</h2>
          <button style={styles.linkBtn}>View all</button>
        </div>
        <div style={styles.cards}>
          {featured.map((item) => (
            <article style={styles.card} key={item.id}>
              <img style={styles.cardImage} alt={item.title} src={item.img} />
              <div style={styles.cardBody}>
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ color: "#6b7280", fontSize: 14 }}>{item.subtitle}</div>
                <div style={styles.priceRow}>
                  <span style={styles.price}>{item.price}</span>
                  <button style={styles.addBtn}>Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

