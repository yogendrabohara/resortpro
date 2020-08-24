import React from 'react'

const myContext = React.createContext()

const Provider = myContext.Provider;

const Consumer = myContext.Consumer;

export {myContext, Provider , Consumer}