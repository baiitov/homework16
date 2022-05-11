import React, { useState, useEffect } from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import { useReducer, useContext } from 'react'
import AuthContext from '../../store/auth-context'
// const emailReducer = (prevState, action) => {
// 	if (action.type === 'INPUT_EMAIL') {
// 		return {
// 			email: action.value,
// 			emailIsValid: action.value.includes('@'),
// 		}
// 	}
// 	if (action.type === 'INPUT_BLUR') {
// 		return {
// 			email: prevState.email,
// 			emailIsValid: prevState.email.includes('@'),
// 		}
// 	}
// }
// const passwordReducer = (prevState, action) => {
// 	if (action.type === 'INPUT_PASSWORD') {
// 		return {
// 			password: action.value,
// 			passwordIsValid: action.value.trim().length > 6
// 		}
// 	}
// 	if (action.type === 'INPUT_PSBLUR') {
// 		return {
// 			password: prevState.password,
// 			passwordIsValid: prevState.password.trim().length > 6
// 		}
// 	}
// }
//debouncing, debounce
const InputReducer = (prevState, action) => {
	if (action.type === 'INPUT_EMAIL') {
		return {
			...prevState,
			email: action.value,
			emailIsValid: action.value.includes('@'),
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			...prevState,
			email: prevState.email,
			emailIsValid: prevState.email.includes('@'),
		}
	}
	if (action.type === 'INPUT_PASSWORD') {
		return {
			...prevState,
			password: action.value,
			passwordIsValid: action.value.trim().length > 6,
		}
	}
	if (action.type === 'INPUT_PSBLUR') {
		return {
			...prevState,
			password: prevState.password,
			passwordIsValid: prevState.password.trim().length > 6,
		}
	}
}
const Login = (props) => {
	const color = useContext(AuthContext)
	
	const [inputState, dispatchInput] = useReducer(InputReducer, {
		email: '',
		emailIsValid: '',
		password: '',
		passwordIsValid: '',
	})
	// const [emailState, dispatchEmail] = useReducer(emailReducer, {
	// 	email: '',
	// 	emailIsValid: '',
	// })
	// const [password, dispatchPassword] = useReducer(passwordReducer, {
	// 	password: '',
	// 	passwordIsValid: '',
	// })

	// const [enteredEmail, setEnteredEmail] = useState('');  // bul huk bizde inputka jazylgan dannnyidy alyyp beret desek dagy bolot  emaildy
	// const [emailIsValid, setEmailIsValid] = useState(); //  bul bizde basyhda false bolot bul huk bozde inputka dannyilar kelse je birnerse jasylsa uslovia tuura bolso true bolor myndaicha aikanda inputtun tuure ishteshin kamsyz kylat
	// const [enteredPassword, setEnteredPassword] = useState(''); // bul huk bizde inputka jazylgan dannnyidy alyyp beret desek dagy bolot passswordtu
	// const [passwordIsValid, setPasswordIsValid] = useState(); //  bul bizde basyhda false bolot bul huk bozde inputka dannyilar kelse je birnerse jasylsa uslovia tuura bolso true bolor myndaicha aikanda inputtun tuure ishteshin kamsyz kylat
	const [formIsValid, setFormIsValid] = useState(false) // bul huk bizde eki inputka jasylyp jatkan cozdordu je dannyi  desek bolot osholor teksherip  eger teksheruu tuuraby jokpu karap turat
	useEffect(() => {
		// use effect negizi bizde settimeout jana ushuga okshogon react jumushu emes nerseleerdi use effect ke jazganybyz tuura bolot
		const timer = setTimeout(() => {
			// setTImeout tu biz ne uchun jazdyk antkeni bizde interedemail jana entered password inputka jazgan saiiyn chygaryp bere beret oshonu biz 3 secunttan kiyin chyksyn dedik
			setFormIsValid(
				inputState.email.includes('@') &&
					inputState.password.trim().length > 6,
			) //kadimki ele uslovia password 6 dan chon bolsun emaild @ BOLSUN
			console.log('changed')
		}, 3000)
		// clean up function
		return () => {
			//clean up function bul bizde inputka jazylgan nerseni kaira kaira tekshere berbesh uchun  akyrky jazylgan tamgaga chein tazalap akyranda teksherip koiot baaryn
			clearTimeout(timer)
		}
	}, [inputState.email, inputState.password]) // dependesis bul negizi [] dep koisok bolot birok bul bir jolu ele ishtep kalat oshon uchun  intered email  entered password berilgen antkeni bular ozgorgon saiyn kaira ishteit
	// const emailChangeHandler = (event) => { // bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value
	//   // setEnteredEmail(event.target.value); // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
	//   dispatchEmail({type : 'INPUT_EMAIL', value: event.target.value})
	// };
	// const passwordChangeHandler = (event) => {// bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value
	//   // setEnteredPassword(event.target.value);   // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
	// dispatchPassword({type: "INPUT_PASSWORD" , value: event.target.value})
	// };
	// const validateEmailHandler = () => { // bul funtion onblur arkyluu focus bolgondo  uje @ teksherip bashtait eger barbolso true kaitarad setimaielIsvalid
	//   // setEmailIsValid(enteredEmail.includes('@'));
	//   dispatchEmail({type: 'INPUT_BLUR'})
	// };
	// const validatePasswordHandler = () => { // bul funtion onblur arkyluu focus bolgondo  uje password 6 dan chonbu oshonu teksheret teksherip butup 6dan chon bolso anda setpasswordisvalid(true)
	//   // setPasswordIsValid(enteredPassword.trim().length > 6);
	//   dispatchPassword({type: "INPUT_PSBLUR"})
	// };
	const emailChangeHandler = (event) => {
		// bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value
		// setEnteredEmail(event.target.value); // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
		dispatchInput({ type: 'INPUT_EMAIL', value: event.target.value })
	}
	const validateEmailHandler = () => {
		// bul funtion onblur arkyluu focus bolgondo  uje @ teksherip bashtait eger barbolso true kaitarad setimaielIsvalid
		// setEmailIsValid(enteredEmail.includes('@'));
		dispatchInput({ type: 'INPUT_BLUR' })
	}

	const passwordChangeHandler = (event) => {
		// bul function inputka jazylgan nerseni alyp bergenge jardam beret event.target.value
		// setEnteredPassword(event.target.value);   // bul jerde biz dannyilardy ozubuzdun hekka berip jaatabyz
		dispatchInput({ type: 'INPUT_PASSWORD', value: event.target.value })
	}

	const validatePasswordHandler = () => {
		// bul funtion onblur arkyluu focus bolgondo  uje password 6 dan chonbu oshonu teksheret teksherip butup 6dan chon bolso anda setpasswordisvalid(true)
		// setPasswordIsValid(enteredPassword.trim().length > 6);
		dispatchInput({ type: 'INPUT_PSBLUR' })
	}
	const submitHandler = (event) => {
		// bul fintion baardyk dannyilar jasylyp propverkadan otso oshonu propstan kelgen onlogin degen funtionga beret
		event.preventDefault()
		props.onLogin(inputState.email, inputState.password)
	}
	return (
		<Card className={` ${color.bacround ? classes.loginn : classes.login}`}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						inputState.emailIsValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={inputState.email}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						inputState.passwordIsValid === false
							? classes.invalid
							: ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={inputState.password}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
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
}
export default Login
