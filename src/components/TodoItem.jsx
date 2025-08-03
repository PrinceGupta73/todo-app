import { useState } from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, editTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>
          {todo.text}
        </span>
      )}

      <div className="btn-group">
        <button className="btn btn-sm btn-secondary" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
