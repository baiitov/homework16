import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}> 
      <h1>Welcome back!</h1>
    </Card>
  );
  // bul jerde jonokoi ele jsx bizde dannyilar kelip true bolso chygat welcome back!
};

export default Home;
