import axios from './axios'

export const register = input => axios.post('/auth/register',input)
export const login = input => axios.post('/auth/login',input)
export const form = input => axios.post('/auth/form',input)
export const fetchMe = () => axios.get('/auth/me')
export const fetchForm = () => axios.get('/auth/getform')
export const deleteForm = () => axios.delete('/auth/delete')
