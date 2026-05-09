import React, { useState } from "react";

let Fruits1 = () => {
  let fruitsArr = ["mango", "banana", "apple"];

  let [fruitList, setFruitList] = useState(fruitsArr);
  let [newFruit, setNewFruit] = useState("");

  

  function adding(e) {
    let val = e.target.value;

    setNewFruit(val);
  }

  function handleSubmit(e){
    e.preventDefault();

    setFruitList([...fruitList, newFruit]);
    setNewFruit("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        onChange={adding} 
        value={newFruit}
        />
        <button>Add</button>
      </form>


        {
           <ul>

            {

                fruitList.map((item)=>{
                    return <li key={item}>{item}</li>;
                })

            }

           </ul>
        }

    </div>
  );
};

export default Fruits1;
