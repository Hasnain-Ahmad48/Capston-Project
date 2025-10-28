import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const styles = {
    wrap: { maxWidth: 560, margin: "24px auto", padding: "0 16px" },
    title: { fontSize: 24, fontWeight: 800, marginBottom: 6 },
    text: { color: "#4b5563", marginBottom: 16, fontSize: 14 },
    form: { display: "grid", gap: 12 },
    label: { fontWeight: 600, fontSize: 13, marginBottom: 4, display: "block" },
    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 10,
      border: "1px solid #e5e7eb",
      outline: "none",
      background: "#fff"
    },
    textarea: {
      width: "100%",
      minHeight: 120,
      padding: "12px 14px",
      borderRadius: 10,
      border: "1px solid #e5e7eb",
      outline: "none",
      background: "#fff",
      resize: "vertical"
    },
    submit: {
      width: "100%",
      background: "#111827",
      color: "#ffffff",
      border: "none",
      padding: "12px 14px",
      borderRadius: 10,
      cursor: "pointer",
      fontWeight: 700
    },
    success: {
      color: "#166534",
      background: "#ecfdf5",
      border: "1px solid #bbf7d0",
      padding: 12,
      borderRadius: 10,
      fontSize: 14
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <main style={styles.wrap}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>We usually respond within one business day.</p>

      {submitted ? (
        <p style={styles.success}>Thanks! Your message has been received.</p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="How can we help?"
            />
          </div>
          <button type="submit" style={styles.submit}>Send</button>
        </form>
      )}
    </main>
  );
};

export default Contact;
