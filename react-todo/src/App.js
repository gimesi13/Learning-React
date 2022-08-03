import React, { useState } from "react";
import "./App.css";
//importing components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  // i can pass these down as a prop (even the setInputText one)
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList />
    </div>
  );
}

export default App;
