import React from "react";

const shoesData = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "₹5999",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "₹8999",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
  },
  {
    id: 3,
    name: "Puma Running Shoes",
    price: "₹3499",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
  {
    id: 4,
    name: "Reebok Classic",
    price: "₹4299",
    img: "https://images.unsplash.com/photo-1608231387042-5d5a7d91d9f0"
  },
  {
    id: 5,
    name: "Converse Sneakers",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
  }
];

const Shoes = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shoes Collection</h1>

      <div style={styles.grid}>
        {shoesData.map((item) => (
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

export default Shoes;