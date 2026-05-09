import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@gmail.com",
    age: 24,
    city: "Delhi",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    age: 22,
    city: "Noida",
  },
  {
    id: 3,
    name: "Rahul Khan",
    email: "rahul.khan@gmail.com",
    age: 26,
    city: "Lucknow",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@gmail.com",
    age: 23,
    city: "Kanpur",
  },
  {
    id: 5,
    name: "Arjun Singh",
    email: "arjun.singh@gmail.com",
    age: 27,
    city: "Ghaziabad",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    email: "neha.kapoor@gmail.com",
    age: 25,
    city: "Chandigarh",
  },
  {
    id: 7,
    name: "Imran Ali",
    email: "imran.ali@gmail.com",
    age: 28,
    city: "Aligarh",
  },
  {
    id: 8,
    name: "Pooja Yadav",
    email: "pooja.yadav@gmail.com",
    age: 21,
    city: "Agra",
  },
  {
    id: 9,
    name: "Rohit Mehta",
    email: "rohit.mehta@gmail.com",
    age: 29,
    city: "Jaipur",
  },
  {
    id: 10,
    name: "Karan Malhotra",
    email: "karan.malhotra@gmail.com",
    age: 30,
    city: "Mumbai",
  },
];

let User = () => {
  let {id} = useParams();



  const[currentUser, setCurrentUser] = useState();

  useEffect(()=>{

    let foundUser = users.find(user => user.id==id );

    if(foundUser){
        setCurrentUser(foundUser);
    }

  },[id])

  return (
    <>
      <h1>I am user</h1>

        {
            currentUser && <div>

                
                    <p> {currentUser.id} </p>
                    <p> {currentUser.name} </p>
                    <p> {currentUser.email} </p>
                    <p> {currentUser.age} </p>
                    <p> {currentUser.city} </p>
                

            </div>
        }

    </>
  );
};

export default User;
