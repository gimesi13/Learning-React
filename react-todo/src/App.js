import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  // run once when the app starts place it over everything so it goes in the state first (fetches data from local storage)
  const getLocalTodos = () => {
    const todoLocal = localStorage.getItem("todos");
    return todoLocal ? JSON.parse(todoLocal) : [];
  };

  // i can pass these down as a prop (even the setInputText one)
  //store all states in app because there is no way to pass it up from a deeper lvl
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getLocalTodos());
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions

  //useEffect (executes every time todos, status value changes), we run the filterhandler func inside
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //switch function for filtering
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      {" "}
      <header>
        <h1>React Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
