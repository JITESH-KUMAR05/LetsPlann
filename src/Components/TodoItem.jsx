import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className={`flex items-center justify-between p-4 mb-2 border rounded-lg shadow-sm transition-all ${
      todo.isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggleComplete(todo.id)}
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
        />
        <span 
          className={`text-lg ${
            todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {todo.todo}
        </span>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onEdit(todo.id)} 
          className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Edit todo"
        >
          <FaEdit />
        </button>
        <button 
          onClick={() => onDelete(todo.id)} 
          className="p-2 text-red-600 hover:text-red-800 transition-colors"
          aria-label="Delete todo"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;