import React, { createContext, useContext, useState } from 'react'

// creates a context for login state
const LoginContext = createContext()

// custom hook for easy access to login context
export const useLogin = () => useContext(LoginContext)

// provider component to manage login state
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // state to track login status

  // function to set login status to true
  const login = () => setIsLoggedIn(true)
  // function to set login status to false
  const logout = () => setIsLoggedIn(false)

  // provides login state and handlers to children components
  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}
