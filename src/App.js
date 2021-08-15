import { useState } from "react";
import "./styles.css";
const foodDictionary = {
  "🍕": "pizza",
  "🍔": "hamburger",
  "🌮": "taco",
  "🍗": "chicken",
  "🥚": "egg",
  "🍿": "popcorn",
  "🍬": "candy",
  "🧁": "cupcake"
};

const foodList = Object.keys(foodDictionary);
export default function App() {
  const [foodInput, setFoodInput] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const handleChange = (e) => {
    setFoodInput(e.target.value);
  };
  const handleSubmit = () => {
    setFoodInput("");
    handleIconChange(foodInput);
  };

  const handleIconChange = (foodIcon) => {
    if (foodList.includes(foodIcon)) {
      setInterpretation(foodDictionary[foodIcon]);
    } else {
      setInterpretation("Sorry, no match found 😥");
    }
  };
  return (
    <div className="App">
      <h1>Food Icon Interpreter</h1>
      <h3>
        Enter an emoji or select one to know what it means
        <span role="img" aria-label="emoji">
          😃
        </span>
      </h3>
      <input
        id="inputBox"
        name="foodInput"
        placeholder="Enter the food item to get it's interpretation!"
        value={foodInput}
        onChange={handleChange}
        onFocus={() => setInterpretation("")}
      />
      <br />
      <button className="m-1" onClick={handleSubmit}>
        Interpret
      </button>
      {interpretation && <div class="output">{interpretation}</div>}
      <div className="icon-section">
        {foodList.map((item, key) => (
          <span
            role="img"
            aria-label="emoji"
            key={key}
            onClick={() => handleIconChange(item)}
            className={
              "foodItem " +
              (interpretation === foodDictionary[item] ? "selected" : "")
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
