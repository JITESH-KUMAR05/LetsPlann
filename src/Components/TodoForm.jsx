import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ todo, setTodo, handleAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex">
      <input
  type="text"
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
  placeholder="What needs to be done?"
  className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
/>
        <button
          type="submit"
          className="flex items-center justify-center px-4 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          <FaPlus className="mr-2" /> Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;