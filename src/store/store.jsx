import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'


const store = configureStore()


export default store