import React, { useEffect, useState } from "react";



let UseEffect = () => {

    let [users, setUser] = useState([]);
  

  useEffect(() => {
    async function GithubProfile() {
      let response = await fetch("https://api.github.com/users?per_page=30");
      let data = await response.json();

      setUser(data);

      console.log("hello");
      
    }

    GithubProfile();
  }, []);

  return (
    <>
      <h1>GitHub Users</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {users.map((users) => (
          <img src={users.avatar_url} height={"100px"} width={"100px"}></img>
        ))}
      </div>
    </>
  );
};

export default UseEffect;
