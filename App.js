import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router'
import { Provider } from "react-redux"
import AllReducers from "./src/config/redux"
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/es/integration/react'

function App() {

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
  }

  
  const persitedReducer = persistReducer(persistConfig, AllReducers)
  const store = createStore(
    persitedReducer, applyMiddleware(createLogger())
  );

  
const peristedStore = persistStore(store)

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={peristedStore} ></PersistGate>
          <Router/>
       </Provider>
  </NavigationContainer>
  )
}

export default App
