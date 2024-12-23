import React from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa fa-trash"
          aria-hidden="true"
          onClick={() => props.deleteListItem(props.index)}
          aria-label="Delete item"
        ></i>
      </span>
    </li>
  );
};

export default TodoList;
