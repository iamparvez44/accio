import React from "react";
import me from "../images/parvez.jpg";

let About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={me} alt="my profile pic" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci
        iste excepturi velit culpa soluta nobis quibusdam nulla eligendi
        impedit, harum quisquam veritatis nisi totam omnis veniam nostrum
        beatae, magni alias sint sapiente nam voluptates cum voluptas! Debitis
        natus, illo itaque, porro consequatur placeat unde error quo veniam
        assumenda praesentium!
      </p>
      <hr />
    </div>
  );
};

export default About;
