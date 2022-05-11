import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const MainHeader = (props) => {
  const color = useContext(AuthContext)
const data = useContext(AuthContext)
  return (
    <header className={`${color.bacround ? classes.main__header : classes.main_header}`}>
      <h1>A Typical Page</h1>
      <input type='checkbox' onClick={() =>data.setBacround ((prev)=> !prev)}/>

      <Navigation  />
    </header>
  );
  // bul jerde jonokoi ele jsx jana navigation degen componentke propstan kelgen nerseni props arkyluu berip koiup jatabyz
};

export default MainHeader;
