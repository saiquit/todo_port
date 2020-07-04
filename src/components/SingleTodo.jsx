import React from "react";
import CompleteBtn from "./CompleteBtn";
import "./single-todo.css";
import { Button } from "reactstrap";

const SingleTodo = ({ todo, idx, handleToggle, editTodo, handleDelete }) => {
  return (
    <tr>
      <th scope="row">{idx}</th>
      <td>{todo.createdAt}</td>
      {todo.completed ? (
        <td className="font-weight-bold">
          {todo.title}
          <span onClick={() => editTodo(idx, todo.id)} className="edit-pen">
            🖉
          </span>
        </td>
      ) : (
        <td style={{ textDecoration: "line-through", fontStyle: "italic" }}>
          {todo.title}
        </td>
      )}
      <td>
        <CompleteBtn todo={todo} idx={idx} handleToggle={handleToggle} />
      </td>
      <td>
        <Button onClick={() => handleDelete(todo.id)} color="light">
          🗑
        </Button>
      </td>
    </tr>
  );
};

export default SingleTodo;
