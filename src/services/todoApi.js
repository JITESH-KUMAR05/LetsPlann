import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

// Configure axios to always send cookies
axios.defaults.withCredentials = true;

// Get all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch todos' };
  }
};

// Get single todo by id
export const getTodoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch todo' };
  }
};

// Create new todo
export const createTodo = async (todoData) => {
  try {
    const response = await axios.post(API_URL, todoData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create todo' };
  }
};

// Update todo
export const updateTodo = async (id, todoData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, todoData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update todo' };
  }
};

// Delete todo
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete todo' };
  }
};