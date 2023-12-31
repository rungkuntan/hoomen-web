import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../pages/auth/slice/auth-slice'
const store = configureStore({
    reducer: {
        auth:authReducer
    }
})

export default store;

