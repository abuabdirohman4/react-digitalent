import React, { useEffect, useReducer } from "react";
import ToDoForm from "../components/ToDoForm.jsx";
import ToDoTable from "../components/ToDoTable.jsx";
import { Box, Typography } from "@mui/material";
// Import si fungsi toDoReducer
import ToDoReducer from "../reducers/ToDoReducer.js";

// Di luar function (initial datanya)
const todosAwal = [
  { id: 1, name: "Review DOM", isCompleted: true },
  { id: 2, name: "Belajar Nge-React", isCompleted: false },
  { id: 3, name: "Belajar Component React", isCompleted: false },
];

function ToDo() {
  // useReducer :
  const [todos, dispatch] = useReducer(ToDoReducer, todosAwal);

  const addTodos = (newTodo) => {
    dispatch({
      type: "nambahin",
      name: newTodo,
    });
  };

  const completeTodo = (idTodo) => {
    dispatch({
      type: "selesain",
      id: idTodo,
    });
  };

  useEffect(() => {
    let textTitle = "Todos: " + todos.length;
    console.log(textTitle);
    document.title = textTitle;
  }, [todos]);

  return (
    <>
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          backgroundColor: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Ganti div menjadi Typography */}
        <Typography variant="h5">Container ToDo</Typography>
        {/* Kita tambahkan component ToDoForm dan ToDoTable */}
        {/* Jangan lupa untuk passing props todos ke dalam ToDoTable */}
        <ToDoForm fnAddTodos={addTodos} />
        {/* Jangan lupa tambahkan props fnCompleteToDo ke dalam table */}
        <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
      </Box>
    </>
  );
}

export default ToDo;
