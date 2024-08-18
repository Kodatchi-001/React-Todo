import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css'
import Todo_App from './pages/Todo-App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo_App/>
  </React.StrictMode>
);

