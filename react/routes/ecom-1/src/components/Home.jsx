import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button
        onClick={() => {
          navigate("/shoes");
        }}
      >
        shoes
      </button>

      <button
        onClick={() => {
          navigate("/electronics");
        }}
      >
        electronic
      </button>

      <h1>Welcome to MyStore 🛍️</h1>
      <p>Select a category from the navbar to explore products.</p>

      <Outlet></Outlet>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial",
  },
};

export default Home;
