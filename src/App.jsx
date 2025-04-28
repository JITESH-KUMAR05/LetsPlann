import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Components/Navbar';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  
  // Toast notifications
  const showToast = (message, type) => {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-4 py-2 rounded-lg text-white ${
      type === 'success' ? 'bg-green-600' : 
      type === 'error' ? 'bg-red-600' : 
      type === 'warning' ? 'bg-yellow-600' : 'bg-blue-600'
    } transform transition-all duration-500 ease-in-out`;
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      toast.style.opacity = '0';
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };

  // Load todos from localStorage
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      try {
        const todos = JSON.parse(todoString);
        setTodos(todos);
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
        showToast("Error loading your todos", "error");
      }
    }
  }, []);

  // Save todos to localStorage
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveToLS();
  }, [todos]);

  const handleEdit = (id) => {
    const t = todos.find(item => item.id === id);
    setTodo(t.todo);
    handleDelete(id); // Delete the todo item being edited
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    showToast("Todo removed", "info");
  };

  const handleAdd = () => {
    if (todo.trim() === '') {
      showToast("Cannot add empty todo", "warning");
      return;
    }
    
    setTodos([...todos, { 
      id: uuidv4(), 
      todo, 
      isCompleted: false, 
      createdAt: new Date() 
    }]);
    setTodo('');
    showToast("Todo added", "success");
  };

  const handleCheckBox = (id) => {
    const newTodos = todos.map(item => 
      item.id === id 
        ? { ...item, isCompleted: !item.isCompleted } 
        : item
    );
    setTodos(newTodos);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const remainingCount = todos.filter(t => !t.isCompleted).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
            JK's Planner
          </h1>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Add Task</h2>
            <TodoForm 
              todo={todo} 
              setTodo={setTodo} 
              handleAdd={handleAdd} 
            />
          </section>

          <section>
            <TodoFilter 
              showFinished={showFinished} 
              toggleFinished={toggleFinished} 
              remainingCount={remainingCount} 
            />
            
            <div className="h-px bg-gray-200 my-4"></div>
            
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Your Tasks</h2>
            
            <div className="space-y-2">
              {todos.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No tasks to show. Add some tasks above!
                </div>
              )}
              
              {todos.map(item => 
                (showFinished || !item.isCompleted) && (
                  <TodoItem 
                    key={item.id}
                    todo={item}
                    onToggleComplete={handleCheckBox}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;