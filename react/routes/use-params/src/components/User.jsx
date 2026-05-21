import React, { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Parvez",
    age: 24,
    email: "parvez@gmail.com",
    city: "Delhi",
  },
  {
    id: 2,
    name: "Anas",
    age: 25,
    email: "anas@gmail.com",
    city: "Noida",
  },
  {
    id: 3,
    name: "Rahul",
    age: 22,
    email: "rahul@gmail.com",
    city: "Mumbai",
  },
  {
    id: 4,
    name: "Aman",
    age: 26,
    email: "aman@gmail.com",
    city: "Lucknow",
  },
  {
    id: 5,
    name: "Zaid",
    age: 23,
    email: "zaid@gmail.com",
    city: "Hyderabad",
  },
  {
    id: 6,
    name: "Ali",
    age: 27,
    email: "ali@gmail.com",
    city: "Bangalore",
  },
  {
    id: 7,
    name: "Sahil",
    age: 21,
    email: "sahil@gmail.com",
    city: "Pune",
  },
  {
    id: 8,
    name: "Arjun",
    age: 28,
    email: "arjun@gmail.com",
    city: "Jaipur",
  },
  {
    id: 9,
    name: "Karan",
    age: 24,
    email: "karan@gmail.com",
    city: "Chandigarh",
  },
  {
    id: 10,
    name: "Imran",
    age: 29,
    email: "imran@gmail.com",
    city: "Kolkata",
  },
];

let User = () => {
  let [currentUser, setCurrentUser] = useState();

  let { id } = useParams();

  useEffect(() => {

    let foundUser = users.find((user) => user.id == id);

    if (foundUser) {
      setCurrentUser(foundUser);

    }
  }, [id]);

  return (
    <>
      <h1>I am user</h1>

        {
            currentUser && <div>

                <h1> {currentUser.name} </h1>
                <h1> {currentUser.age} </h1>
                <h1> {currentUser.email} </h1>
                <h1> {currentUser.city} </h1>

            </div>
        }

    </>
  );
};

export default User;
