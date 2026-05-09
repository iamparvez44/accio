import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const users = [
  { id: 1, name: "Amit Sharma", gender: "Male", city: "Delhi" },
  { id: 2, name: "Priya Verma", gender: "Female", city: "Noida" },
  { id: 3, name: "Rahul Khan", gender: "Male", city: "Delhi" },
  { id: 4, name: "Sneha Gupta", gender: "Female", city: "Kanpur" },
  { id: 5, name: "Arjun Singh", gender: "Male", city: "Noida" },
  { id: 6, name: "Neha Kapoor", gender: "Female", city: "Delhi" },
  { id: 7, name: "Imran Ali", gender: "Male", city: "Kanpur" },
  { id: 8, name: "Pooja Yadav", gender: "Female", city: "Agra" },
  { id: 9, name: "Rohit Mehta", gender: "Male", city: "Agra" },
  { id: 10, name: "Karan Malhotra", gender: "Male", city: "Delhi" }
];

const People = () => {
  const [searchParams] = useSearchParams();
  const [filterData, setFilterData] = useState(users);

  useEffect(() => {
    const gender = searchParams.get("gender");

    if (gender) {
      setFilterData(users.filter(user => user.gender === gender));
    } else {
      setFilterData(users);
    }
  }, [searchParams]);

  return (
    <>
      {filterData.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Gender: {user.gender}</p>
          <p>City: {user.city}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default People;