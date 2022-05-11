import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation  />
    </header>
  );
  // bul jerde jonokoi ele jsx jana navigation degen componentke propstan kelgen nerseni props arkyluu berip koiup jatabyz
};

export default MainHeader;
