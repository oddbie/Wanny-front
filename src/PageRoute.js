import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Hello from './Hello';
import Todo from './Todo';
import Footer from './Footer';
import NotFound from './NotFound';

const PageRoute = () => {
  return (
    <div className='PageRoute'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default PageRoute;
