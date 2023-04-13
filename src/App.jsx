import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./App.scss";
import Swal from "sweetalert2";

function App() {
  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem("Items");
    if (value == null) return [];
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos((currentTodos) => {
          return currentTodos.filter((todo) => todo.id !== id);
        });
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };
  return (
    <div className='container'>
      <h1 className='todo__title'>Todo List</h1>
      <AddTodo onSubmit={addTodo} />

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
