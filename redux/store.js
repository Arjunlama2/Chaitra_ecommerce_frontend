import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice'
import userReducer from '../src/features/user/userSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },
})