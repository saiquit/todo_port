import React from "react";
import { Form, Button, Input } from "reactstrap";
import { motion } from 'framer-motion'

const AddTodo = ({ handleChange, handleSubmit, inp }) => {
  return (
    <Form onSubmit={handleSubmit} >
      <motion.div className="d-flex p-5" initial={{scale: 0}} animate={{scale: 1}} >
        <div className="col-10">
          <Input placeholder="Add todo" value={inp || ''} onChange={handleChange} />
        </div>
        <div className="col-2">
          <Button color="primary" disabled={!inp ? true: false } type="submit">
            Add
          </Button>
        </div>
      </motion.div>
    </Form>
  );
};
export default AddTodo;
