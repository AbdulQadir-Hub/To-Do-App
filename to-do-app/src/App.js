import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      const newTodo = { id: Date.now(), text: inputText }; 
      setListTodo([...listTodo, newTodo]);
    } else {
      alert("Please Enter Your Tasks!");
    }
  };

  const deleteListItem = (id) => {
    const newListTodo = listTodo.filter(todo => todo.id !== id); 
    setListTodo(newListTodo);
  };

  return (
    <>
      <h1 className="app-heading">Todo-list</h1>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <hr />
          {listTodo.map((listItem) => {
            return (
              <TodoList
                key={listItem.id}
                item={listItem.text}
                deleteListItem={() => deleteListItem(listItem.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
