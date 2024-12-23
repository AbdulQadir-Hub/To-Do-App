import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleAddClick = () => {
    if (inputText.trim() === "") {
      alert("Please Enter Your Task To Add.");
      return;
    }
    if (typeof props.addList === "function") {
      props.addList(inputText);
    } else {
      console.error("addList prop is not a function");
    }
    setInputText("");
  };

  return (
    <div className="input-container">
      <input
        placeholder="Enter your Tasks "
        value={inputText}
        type="text"
        className="input-box-todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button className="add-btn" onClick={handleAddClick}>
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
