import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import './user/user.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);