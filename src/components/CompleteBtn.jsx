import React from "react";
import { Button } from "reactstrap";

const CompleteBtn = ({ handleToggle, todo, idx }) => {
  return (
    <>
      <Button
        onClick={() => handleToggle(idx)}
        color={!todo.completed ? "success" : "danger"}
      >
        {!todo.completed ? "✓" : "✘"}
      </Button>
    </>
  );
};

export default CompleteBtn;
