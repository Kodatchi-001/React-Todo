import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/Styles/style.css'
import reportWebVitals from './reportWebVitals';
import '../src/Utils/Date'
//Import Page
import Todolist_App from './Pages/Todolist-App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todolist_App/>
  </React.StrictMode>
);

reportWebVitals();
