import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events

  //delete todo (filter if element.id dosent match todo.id then delete it from the list)
  const deleteHandler = () => {
    // this will compare the element that WE CLICKED ON to all todos
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  //mark as done (map trough an add all the properties back to todos BUT change the one that I want to)
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          //!. item.completed changes completed bolean to the opposite (true), this is also responsible for toggling
          return { ...item, completed: !item.completed };
        }
        // else return the original
        return item;
      })
    );
  };

  //important syntax at todo.completed (if todo is completed, add a class to it (completed))
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
