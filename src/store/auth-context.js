import React from 'react'
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	bacround: false
})
export default AuthContext
