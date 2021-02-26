//import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // var person = {
  //   id: "011",
  //   name: "Karim",
  //   job: "Jr software Dev",
  // };
  // var person2 = {
  //   id: "022",
  //   name: "Hasan",
  //   job: "Front-end Dev",
  // };

  // var style = {
  //   color: "red",
  //   backgroundColor: "white",
  // };

  //
  //Create multiple components from an array of objects
  const departments = [
    "cse",
    "eee",
    "ete",
    "civil",
    "mechanical",
    "bba",
    "eb",
    "eng",
    "bangla",
  ];

  const deptNames = departments.map((dept) => dept);
  console.log(deptNames);

  // product array
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "Adobe XD", price: "60.99" },
    { name: "PDF Reader", price: "40.99" },
    { name: "Premiere Pro", price: "90.99" },
  ];

  // friend array
  const friends = [
    "kabir",
    "kais",
    "saif",
    "shakib",
    "rifat",
    "arif",
    "rabi",
    "shahin",
    "akash",
    "shihab",
    "moni",
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <p className="" style={style}>
          Person: {person.id + " " + person.name + " " + person.job}{" "}
        </p>
        <p className="" style={{ backgroundColor: "green" }}>
          Person: {person2.id + " " + person2.name + " " + person2.job}{" "}
        </p> */}

        {/* Load dynamic data, API call, useEffect integrate State */}
        <Users></Users>
        {/* <Photos></Photos> */}

        {/* Introduction to Component State  */}
        <Counter></Counter>

        {/* Create multiple components from an array of objects */}
        <ul>
          {departments.map((dept) => (
            <li>{dept}</li>
          ))}

          {products.map((product) => (
            <li>
              {product.name} {product.price}
            </li>
          ))}
        </ul>

        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/*  */}
        {friends.map((fr) => (
          <Friends name={fr}></Friends>
        ))}

        {/* component defined by user */}

        {/* pass obj to component and access obj */}
        {/* 1st way */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* 2nd and 3rd way  */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>

        {/*  */}
        <Person name="Rubel" job="Bowler"></Person>
        <Person name="Musfiq" job="Wicket Keeper"></Person>
        <Person name="Tamim" job="Batsman"></Person>
        <Person name="Shakib" job="All Rounder"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid salmon",
    margin: "16px",
    padding: "20px",
    width: "400px",
  };

  console.log(props);

  // data pass by props
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Job: {props.job} </h4>
    </div>
  );
}

// pass obj to component and access obj
// Poduct Props
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "16px",
    backgroundColor: "lightgray",
    height: "230px",
    width: "230px",
    float: "left",
    margin: "16px",
    color: "black",
  };

  //
  const { name, price } = props.product;
  //
  return (
    <div style={productStyle}>
      {/* 1st way */}
      {/* <h3>Name:{props.name} </h3>
      <h4>Price:{props.price} </h4>
      <button>Buy Now</button> */}

      {/*2nd way  */}
      {/* <h3>Name:{props.product.name} </h3>
      <h4>Price:{props.product.price} </h4>
      <button>Buy Now</button> */}

      {/* 3rd way  */}
      <h3>Name:{name} </h3>
      <h4>Price:{price} </h4>
      <button>Buy Now</button>
    </div>
  );
}
//
// Introduction to Component State
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    //const newCount = count + 1;
    setCount(count + 1);
  };
  return (
    <div>
      <h3>count: {count} </h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
//
// Load dynamic data, API call, useEffect integrate State
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>

      <ul>
        {users.map((user) => (
          <li>
            Name: {user.name} , Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

//
//
// function Photos() {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((data) => setPhotos(data));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {photos.map((photo) => (
//           <li>
//             {photo.title} , {photo.thumbnailUrl}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// Friend Component
function Friends(props) {
  const friendStyle = {
    border: "1px solid gray",
    borderRadius: "16px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "16px",
    color: "black",
  };
  return (
    <div style={friendStyle}>
      <h4>Name:{props.name}</h4>
    </div>
  );
}

export default App;
