import React, { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false) // бул хук бизге компоненттер качан чыгышын карап берет башында false болот бизге логинден данныйлар келсе true болуп бизке экинчи компанентти чыгарып берет
	useEffect(() => {
		const storedUserLoggedInfo = localStorage.getItem('isLoggedIn') //биз localStorega теги биздин данныйларды алып салыштырып жатабыз

		if (storedUserLoggedInfo === '1') {
			// бул жерде кадимки эле условия эгер локалда бир данный бар болчу болсо же данный келсе андаа setIsLoggedIn(true) болот
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = async (email, password) => {
		// бул функция баласынан атасына данныйларт алып чыгып берет мындайча айтканда логин деген компоненттен бизге инпутка жазылган данныйларды
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', '1') // бул жерде биз келген данныйларды локалга саолып жатабыз эгер бир нерсе келип локалга бирнерсе тушсо анда setIsLoggedIn(true) болот
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		// функция бизде бир баттон бар ошого пропс аркылуу берилген ал баттон басылса локалды тазалап салат жана setIsLoggedIn(false) кылат ал false болсо бизде кайра логин коргозуп койот
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}
	// eger isloggedIn(true) bolso mainHeader chygat ekranga rerender bolup
	return (
		<React.Fragment>
			<AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
				<MainHeader
					
				/>
				<main>
					{!isLoggedIn && <Login onLogin={loginHandler} />}

					{isLoggedIn && <Home onLogout={logoutHandler} />}
				</main>
			</AuthContext.Provider>
		</React.Fragment>
	)
	// эгер isLoggedIn false bolso anda bizge login korgozup tura beret eger true bolso Home degen componenti chygaryp beret conditional render
}

export default App
