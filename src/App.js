import React from "react";
const foodList = ["Ramen", "Chicken", "Pizza", "Beef", "Hamburger"];

function Me({ name }) {
  return <h1>I like {name}</h1>;
}

function App() {
  return (
    <div className="App">
      hello!!
      {foodList.map((food, idx) => (
        <Me key={idx} name={food} />
      ))}
    </div>
  );
}

export default App;
