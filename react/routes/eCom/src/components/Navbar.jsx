import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyStore</h2>

      <div style={styles.links}>
        <NavLink to="/clothes" style={styles.link}>
          Clothes
        </NavLink>

        <NavLink to="/shoes" style={styles.link}>
          Shoes
        </NavLink>

        <NavLink to="/electronics" style={styles.link}>
          Electronics
        </NavLink>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#222",
  },
  logo: {
    color: "#fff",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;