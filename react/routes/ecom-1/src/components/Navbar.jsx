import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>MyStore</h2>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="cloths" style={styles.link}>Cloths</Link>
          <Link to="electronics" style={styles.link}>Electronics</Link>
          <Link to="shoes" style={styles.link}>Shoes</Link>
          <Link to="foods" style={styles.link}>Foods</Link>
        </div>
      </nav>

      {/* Nested routes yahan render honge */}
      <Outlet />
    </>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#222",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
};

export default Navbar;