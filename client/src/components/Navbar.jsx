import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../../context/appContext';


export default function Navbar() {
  const{loggedIn, handleLogout} = useContext(AppContext);
  return (
    <nav className='navbar'>
      <ul className='elem'>
      {loggedIn ? (
        <li className='list'>
          <Link className='elem' to='#' onClick={handleLogout}>Logout</Link>
        </li>
      ): (
        <li className='list'>
          <Link className='elem' to='/'>Home</Link>
          <Link className='elem' to='/register'>Register</Link>
          <Link className='elem' to='/login'>Login</Link>
        </li>
      )}
      </ul>
    </nav>
  )
}
