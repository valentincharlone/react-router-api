import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//VISTAS
import App from './App';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Notfound from './routes/Notfound';
import Post from './routes/Post';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='blog/:id' element={<Post></Post>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


