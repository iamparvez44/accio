import React from "react";

const electronicsData = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹79,900",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
  },
  {
    id: 2,
    name: "Samsung Smart TV",
    price: "₹54,999",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: "₹12,999",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215"
  },
  {
    id: 4,
    name: "Dell Laptop",
    price: "₹65,000",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 5,
    name: "Apple Smart Watch",
    price: "₹42,999",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
  }
];

const Electronics = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Electronics Collection</h1>

      <div style={styles.grid}>
        {electronicsData.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.img} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p style={styles.price}>{item.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "220px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "15px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    color: "#28a745",
    fontWeight: "bold",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Electronics;