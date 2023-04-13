import { useState } from "react";

function AddTodo({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim().length === 0) return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form-input'
        type='text'
        id='item'
        placeholder='Add your task..'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button className='btn btn-primary'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
