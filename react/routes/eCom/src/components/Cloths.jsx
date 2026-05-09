import React from "react";

const clothesData = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "₹599",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Blue Denim Jacket",
    price: "₹2499",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 3,
    name: "Black Hoodie",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    id: 4,
    name: "Formal Shirt",
    price: "₹1299",
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10"
  },
  {
    id: 5,
    name: "Casual Jeans",
    price: "₹1999",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d"
  }
];

const Clothes = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Clothing Collection</h1>

      <div style={styles.grid}>
        {clothesData.map((item) => (
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
    transition: "transform 0.2s ease",
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

export default Clothes;