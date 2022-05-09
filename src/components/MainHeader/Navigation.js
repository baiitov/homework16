import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
   
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button> 
          </li>
        )}
      </ul>
    </nav>
  );
  // button bul ozuno propstan kelgen funtion altat eger button basylsa bizde is loggedIn false bolup kaira loginge chygryp salat bizdi
};

export default Navigation;
