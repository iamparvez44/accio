import React from "react";
import Header from "./Header";
import About from "./AboutMe";
import Section from "./Section";

let sectionData = [
  {
    title: "Skill",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, iste itaque possimus, voluptatum autem provident ut sapiente vitae commodi odit necessitatibus saepe nulla magni quisquam! Perferendis, odit reprehenderit! Neque ducimus officiis modi provident! Incidunt iusto beatae optio ullam, debitis fuga, asperiores error, pariatur minus porro omnis. Cum tempora eveniet veniam!",
  },
  {
    title: "Qualification",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, iste itaque possimus, voluptatum autem provident ut sapiente vitae commodi odit necessitatibus saepe nulla magni quisquam! Perferendis, odit reprehenderit! Neque ducimus officiis modi provident! Incidunt iusto beatae optio ullam, debitis fuga, asperiores error, pariatur minus porro omnis. Cum tempora eveniet veniam!",
  },
  {
    title: "Projects",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, iste itaque possimus, voluptatum autem provident ut sapiente vitae commodi odit necessitatibus saepe nulla magni quisquam! Perferendis, odit reprehenderit! Neque ducimus officiis modi provident! Incidunt iusto beatae optio ullam, debitis fuga, asperiores error, pariatur minus porro omnis. Cum tempora eveniet veniam!",
  },
];

let App = () => {
  return (
    <div>
      <Header></Header>
      <About></About>

      {sectionData.map((item) => {
        return(
        <Section title={item.title} des={item.des}></Section>)
      })}
    </div>
  );
};

export default App;
