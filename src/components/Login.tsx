import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="loginContainer">
      <form className="loginContainer__form">
        <h1>LogIn</h1>
        <label htmlFor="number">Collaborator ID#</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="text" />
        <NavLink className="inactive" to="/">
          <input type="submit" value="LOGIN" />
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
