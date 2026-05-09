import React, { useState } from "react";

let App = () => {
  let [coins, setCoins] = useState({ gold: 0, silver: 0, bronze: 0 });

  function updateGold() {
    setCoins({ ...coins, gold: coins.gold + 1 });
  }

  function updateSilver() {
    setCoins({ ...coins, silver: coins.silver + 1 });
  }
  function updateBronze() {
    setCoins({ ...coins, bronze: coins.bronze + 1 });
  }

  return (
    <div>
      <h1>
        Gold:{coins.gold} | Silver: {coins.silver} | Bronze: {coins.bronze}
      </h1>

      <button onClick={updateGold}>Gold</button>
      <button onClick={updateSilver}>Silver</button>
      <button onClick={updateBronze}>Bronze</button>
    </div>
  );
};

export default App;
