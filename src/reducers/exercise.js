/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

export const exercise = createSlice({
  name: 'exercise',
  initialState: {
    instructions: null
  },
  reducers: {
    setInstructions: (store, action) => {
      store.instructions = action.payload
    }
  }
})

