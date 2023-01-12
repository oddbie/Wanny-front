import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <h1>This is Header</h1>
      <Link to='/'>Home </Link>
      <Link to='/todo'>Todo List</Link>
    </div>
  );
};

export default Header;
