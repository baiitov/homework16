import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
//debouncing, debounce
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');  // bul huk bizde inputka jazylgan dannnyidy alyyp beret desek dagy bolot  emaildy
  const [emailIsValid, setEmailIsValid] = useState(); //  bul bizde basyhda false bolot bul huk bozde inputka dannyilar kelse je birnerse jasylsa uslovia tuura bolso true bolor myndaicha aikanda inputtun tuure ishteshin kamsyz kylat
  const [enteredPassword, setEnteredPassword] = useState(''); // bul huk bizde inputka jazylgan dannnyidy alyyp beret desek dagy bolot passswordtu
  const [passwordIsValid, setPasswordIsValid] = useState(); //  bul bizde basyhda false bolot bul huk bozde inputka dannyilar kelse je birnerse jasylsa uslovia tuura bolso true bolor myndaicha aikanda inputtun tuure ishteshin kamsyz kylat
  const [formIsValid, setFormIsValid] = useState(false); // bul huk bizde eki inputka jasylyp jatkan cozdordu je dannyi  desek bolot osholor teksherip  eger teksheruu tuuraby jokpu karap turat
  useEffect(() => { // use effect negizi bizde settimeout jana ushuga okshogon react jumushu emes nerseleerdi use effect ke jazganybyz tuura bolot
    const timer = setTimeout(() => {  // setTImeout tu biz ne uchun jazdyk antkeni bizde interedemail jana entered password inputka jazgan saiiyn chygaryp bere beret oshonu biz 3 secunttan kiyin chyksyn dedik
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6); //kadimki ele uslovia password 6 dan chon bolsun emaild @ BOLSUN
      console.log('changed');
    }, 3000);
    // clean up function
    return () => { //clean up function bul bizde inputka jazylgan nerseni kaira kaira tekshere berbesh uchun  akyrky jazylgan tamgaga chein tazalap akyranda teksherip koiot baaryn
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]); // dependesis bul negizi [] dep koisok bolot birok bul bir jolu ele ishtep kalat oshon uchun  intered email  entered password berilgen antkeni bular ozgorgon saiyn kaira ishteit
  const emailChangeHandler = (event) => { // bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value 
    setEnteredEmail(event.target.value); // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
  };
  const passwordChangeHandler = (event) => {// bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value 
    setEnteredPassword(event.target.value);   // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
  
  };
  const validateEmailHandler = () => { // bul funtion onblur arkyluu focus bolgondo  uje @ teksherip bashtait eger barbolso true kaitarad setimaielIsvalid
    setEmailIsValid(enteredEmail.includes('@'));
  };
  const validatePasswordHandler = () => { // bul funtion onblur arkyluu focus bolgondo  uje password 6 dan chonbu oshonu teksheret teksherip butup 6dan chon bolso anda setpasswordisvalid(true)
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const submitHandler = (event) => {  // bul fintion baardyk dannyilar jasylyp propverkadan otso oshonu propstan kelgen onlogin degen funtionga beret
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}> 
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
  // <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>  bul jerde emailisvalid false ko barabar bolso anda classes.invalid ishteit true bolso ''
  // <label htmlFor="email">E-Mail</label>
  // <input
  //   type="email"
  //   id="email"
  //   value={enteredEmail} 
  //   onChange={emailChangeHandler} onchange bul change bolgon saiyn ar bor tamgany alyp beret
  //   onBlur={validateEmailHandler} bul focuz bolgondo ishteit jana input basulganda eju ishtep bashtait
  // />
//   <Button type="submit" className={classes.btn} disabled={!formIsValid}> eger formisvalid true bolso gana bizde button ishteit 
//   Login
// </Button>
};
export default Login;