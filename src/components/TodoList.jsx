import React, { useState } from "react";
import { Table, Alert } from "reactstrap";
import AddTodo from "./input";
import SingleTodo from "./SingleTodo";
import { Persist } from 'react-persist'

const TodoList = () => {
  const [iniTodo, setIniTodo] = useState([]);
  const [inp, setInp] = useState(undefined);

  const handleChange = e => {
    setInp(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!inp) return;
    setIniTodo([
      {
        id: Math.random(),
        title: inp,
        completed: true,
        createdAt: new Date().toLocaleDateString()
      },
      ...iniTodo
    ]);
    setInp("");
  };

  const handleToggle = idx => {
    const newTodo = [...iniTodo];
    newTodo[idx].completed = !newTodo[idx].completed;
    setIniTodo(newTodo);
  };

  const editTodo = (idx, id) => {
    setInp(iniTodo[idx].title);
    let newTodo = iniTodo.filter(todo => todo.id !== id);
    setIniTodo(newTodo);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleDelete = id => {
    setIniTodo(todos => {
      return todos.filter(todo => todo.id !== id);
    });
  };
  return (
    <>
      <AddTodo
        inp={inp}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {iniTodo.length ? (
        <Table striped className="px-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {iniTodo.map((todo, idx) => (
              <SingleTodo
                key={idx}
                todo={todo}
                idx={idx}
                handleToggle={handleToggle}
                editTodo={editTodo}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert className="text-center mx-3">Please add your Todos</Alert>
      )}

    <Persist 
          name="todos" 
          data={iniTodo} 
          debounce={500} 
          onMount={data => setIniTodo(data)}
        />
    </>
  );
};

export default TodoList;
