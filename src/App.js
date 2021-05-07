/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { exercise } from './reducers/exercise'
import ExerciseList from './components/ExerciseList'

const reducer = combineReducers({
  exercise: exercise.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ExerciseList />
    </Provider>
  )
}

export default App
