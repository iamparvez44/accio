// import React, { useState } from "react";

// let Fruits = () => {
//   let fruitArr = ["apple", "mango", "banana"];

//   //   let [finalAdd, setFindalAdd] = useState("");
//   //   let [moreFruits, setMoreFruits] = useState(fruitArr);

//   //   function adding(e) {
//   //     let value = e.target.value;

//   //     setFindalAdd(value);
//   //   }

//   //   function finalSubmit(e) {
//   //     e.preventDefault();

//   //     setMoreFruits([...fruitArr, finalAdd]);
//   //   }

//   let [fruitList, setFruitList] = useState(fruitArr);
//   let [newFruit, setNewFruit] = useState("");

//   console.log(newFruit);
//   console.log(fruitList);

//   function adding(e) {
//     let value = e.target.value;

//     //setFruitList([...fruitList, value])
//     setNewFruit(value);
//   }

//   function finalAdd(e) {
//     e.preventDefault();
//     // setNewFruit(fruitList);
//     setFruitList([...fruitList, newFruit]);
//   }

//   return (
//     <div>
//       <form onSubmit={finalAdd}>
//         <input type="text" onChange={adding} />
//         <button>Add</button>
//       </form>

//       {/* // display here */}
//     </div>
//   );
// };

// export default Fruits;

import React, { useState } from "react";

let Fruits = () => {
  let fruitArr = ["apple", "mango", "banana"];

  let [fruitList, setFruitList] = useState(fruitArr);
  let [newFruit, setNewFruit] = useState("");

  console.log(fruitList)

//   console.log(newFruit);

  function handleChange(e) {
    let val = e.target.value;

    // setFruitList([...fruitList, val])
    setNewFruit(val);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFruitList([...fruitList, newFruit]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Fruits;
