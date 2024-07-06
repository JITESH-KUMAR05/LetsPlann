import { useEffect, useState } from 'react';
import './App.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

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
  };

  const handleAdd = () => {
    if (todo === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (id) => {
    const newTodos = todos.map(item => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item);
    setTodos(newTodos);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />
      <div className="md:container mx-auto mb-5 rounded-xl overflow-auto md:w-1/2  p-5 h-[91.2vh] bg-violet-100">
        <div className='lg:w-full p-5 flex justify-center'>
          <h1 className='text-xl font-extrabold'>JK's Planner - your perfect choice to plan anything</h1>
        </div>
        <div className='px-5'>
          <h1 className='text-2xl font-bold'>Add todos</h1>
        </div>
        <div className="addTodo my-5 flex w-full ">
          <input onChange={handleChange} value={todo} className='px-4 py-2 w-full rounded-lg outline-none' type="text" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 px-5 py-2 rounded-lg text-white mx-3 font-bold'>Save</button>
        </div>
        <div className="">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> show finished
          <div className='h-[1px] bg-black opacity-15 w-[80%] mx-auto my-2'></div>
          <h1 className='text-2xl font-bold'>Your Todos</h1>
        </div>
        <div className="todos">
          {todos.length === 0 && <div className="text-2xl font-bold m-4 text-slate-600">No todos to show</div>}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex w-full justify-between my-3">
                <div className="flex gap-5 justify-center items-center">
                  <input name={item.id} onChange={() => handleCheckBox(item.id)} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through text-lg" : "text-lg"}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full items-center">
                  <button onClick={() => handleEdit(item.id)} className='bg-violet-800 hover:bg-violet-950 px-5 py-1 rounded-lg text-white text-xl mx-2 font-bold'><FaEdit /></button>
                  <button onClick={() => handleDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 px-5 py-1 rounded-lg text-white text-xl mx-2 font-bold'><MdDelete /></button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}

export default App;