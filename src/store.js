import { configureStore } from '@reduxjs/toolkit'

// get the slice for auth
import authSlice from './redux/authSlice'
import{ applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'

// create a store with required reducers
const store = configureStore({
  reducer: {
    authSlice,
  },
})

export default store
