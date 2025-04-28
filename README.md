# LetsPlann - Task Management Application

A modern, full-stack task management application built with the MERN stack.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete tasks
- Set task priorities (low, medium, high)
- Add deadlines with countdown timers
- Visual indicators for upcoming and overdue tasks
- Filter tasks by status (all, active, completed)
- Responsive design for all devices

## Technologies Used

### Frontend
- React 18 with hooks
- React Router v7
- Tailwind CSS for styling
- Formik & Yup for form validation
- date-fns for date handling
- React Toastify for notifications
- Axios for API requests
- React Icons

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- JWT Authentication with HTTP-only cookies
- bcrypt for password hashing

## Architecture

The application follows a modern client-server architecture:
- **Frontend**: Single-page React application in the project root
- **Backend**: RESTful API built with Express.js in the `/server` directory
- **Database**: MongoDB Atlas for data persistence

## Database Schema

### Users Collection
```
{
    _id: ObjectId,
    username: String,
    email: String,
    password: String (hashed),
    createdAt: Date
}
```

### Tasks Collection
```
{
    _id: ObjectId,
    title: String,
    description: String,
    completed: Boolean,
    userId: ObjectId (reference to Users collection),
    createdAt: Date,
    updatedAt: Date
}
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Backend Setup
1. Clone the repository
     ```
     git clone https://github.com/yourusername/Todo-App.git
     cd Todo-App/backend
     ```

2. Install dependencies
     ```
     npm install
     ```

3. Create a `.env` file in the server directory with the following variables
     ```
    NODE_ENV=development
    PORT=5000 
    MONGO_URI=your_mongodb_connection_string 
    JWT_SECRET=your_jwt_secret
     ```

4. Initialize the database
     ```
     npm run init-db
     ```

### Frontend Setup
1. Navigate back to the project root directory
     ```
     cd ..
     ```

2. Install frontend dependencies
     ```
     npm install
     ```

3. Create a `.env` file in the frontend directory
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     ```

## Running the Application Locally

### Start the Backend Server
1. Navigate to the server directory
     ```
     cd server 
     npm run dev
     ```

2. Run the development server
     ```
     npm run dev
     ```

### Start the Frontend Development Server
1. In a new terminal, navigate to the project root directory
     ```
     cd LetsPlann 
     npm run dev
     ```

2. Run the development server
     ```
     npm run dev
     ```

3. Open your browser and visit `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/users | Register new user |
| POST   | /api/users/login | Login user |
| POST   | /api/users/logout | Logout user |
| GET    | /api/users/profile | Get current user profile |
| GET    | /api/todos | Get all todos for logged in user |
| POST   | /api/todos | Create a new todo |
| GET    | /api/todos/:id | Get a specific todo |
| PUT    | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Developer Notes

- The application uses HTTP-only cookies for authentication to enhance security
- MongoDB connection string should include proper URL encoding for special characters
- All API endpoints are protected except for user registration and login

## Future Enhancements

- Task categories and tags
- Collaborative tasks and sharing
- Email notifications for deadlines
- Dark mode support
- Mobile application with React Native