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
      <div className='form-group'>
        <label htmlFor='item'>Add Todo</label>
        <input
          type='text'
          id='item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className='btn'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
