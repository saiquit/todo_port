import React from "react";
import { Form, Button, Input } from "reactstrap";

const AddTodo = ({ handleChange, handleSubmit, inp }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex p-5">
        <div className="col-10">
          <Input placeholder="Add todo" value={inp || ''} onChange={handleChange} />
        </div>
        <div className="col-2">
          <Button color="primary" disabled={!inp ? true: false } type="submit">
            Add
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default AddTodo;
