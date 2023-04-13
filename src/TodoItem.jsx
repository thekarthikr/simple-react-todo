import { FaTrash } from "react-icons/fa";

function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
  return (
    <li className='todo__item' id='checklist'>
      <div className='todo__item-content'>
        <input
          className='todo__input'
          type='checkbox'
          id={id}
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id}> {title} </label>
      </div>
      <button onClick={() => deleteTodo(id)} className=' btn btn-secondary'>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
