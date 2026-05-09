import React from "react";

const foodTypes = [
  "Burger",
  "Pizza",
  "Sandwich",
  "Pasta",
  "Biryani",
  "Noodles",
  "French Fries",
  "Ice Cream",
  "Chocolate Cake",
  "Cold Coffee"
];

const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `${foodTypes[i % foodTypes.length]} ${i + 1}`,
  price: `₹${149 + i * 20}`,
  description:
    "Freshly prepared delicious food item made with high-quality ingredients and rich taste.",
  image: `https://loremflickr.com/300/300/${foodTypes[i % foodTypes.length].toLowerCase()}?lock=${i + 1}`
}));

const Foods = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Food Collection 🍔</h1>

      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />

            <h3 style={styles.title}>{item.name}</h3>

            <p style={styles.desc}>{item.description}</p>

            <h4 style={styles.price}>{item.price}</h4>

            <button style={styles.btn}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "#f5f6fa"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  title: {
    margin: "10px 0 5px"
  },

  desc: {
    fontSize: "14px",
    color: "#555"
  },

  price: {
    color: "#27ae60",
    margin: "10px 0"
  },

  btn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#222",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Foods;