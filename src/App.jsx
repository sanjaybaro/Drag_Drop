import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Drag and Drop Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
