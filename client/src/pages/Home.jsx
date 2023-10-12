import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export default function Home() {
  const{loggedIn, user} = useContext(AppContext);
  console.log('LoggedIn', loggedIn);
  return (
    <div>
      {loggedIn? <h1>{!!user && (<p>Hi {user.name}</p>)}</h1> : <p>Welcome to the homepage! Please login</p>}
    </div>
  )
}
