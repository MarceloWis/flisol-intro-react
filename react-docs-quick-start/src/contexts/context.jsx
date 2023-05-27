import React, { createContext, useReducer, useState } from 'react'
import { MainReducer } from '../reducers/reducer'
import addGithubUserAction from '../reducers/actions'

export const MainContext = createContext({})

export default function MainContextProvider({children}) {
  // const [githubUser, setGithubUser] = useState(null)
  const [state, dispatch] = useReducer(MainReducer, {
    user: null
  })


  function addGithubUser(user) {
    dispatch(addGithubUserAction(user))
  }

  return (
    <MainContext.Provider value={{
      githubUser: state,
      addGithubUser
    }}>
      {console.log({state})}
      {children}
    </MainContext.Provider>
  )
}
