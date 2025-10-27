import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Authentication/LoginPage/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Authentication/SignUp/Signup.jsx'
import "@stripe/stripe-js"

import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)
