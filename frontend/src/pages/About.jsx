import React from "react";

const About = () => {
  const styles = {
    wrap: { maxWidth: 1000, margin: "24px auto", padding: "0 20px" },
    title: { fontSize: 28, fontWeight: 800, marginBottom: 8 },
    text: { color: "#4b5563" }
  };
  return (
    <main style={styles.wrap}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>We are passionate about delivering quality products and delightful shopping experiences.</p>
    </main>
  );
};

export default About;
