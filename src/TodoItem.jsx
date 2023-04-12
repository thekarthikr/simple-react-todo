function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
  return (
    <li className='todo__item'>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className='btn btn-delete'>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
