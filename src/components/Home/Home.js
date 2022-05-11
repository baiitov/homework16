import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const Home = (props) => {
  const color = useContext(AuthContext)
  return (
    <Card className={`${color.bacround ? classes.home : classes.homee}`}> 
      <h1>Welcome back!</h1>
    </Card>
  );
  // bul jerde jonokoi ele jsx bizde dannyilar kelip true bolso chygat welcome back!
};

export default Home;
