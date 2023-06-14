import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as authService from '../../../api/auth-api'
import { removeAccessToken, setAccessToken } from '../../../utils/localstorage';
const initialState  = {
    isAuthenticated: false,
    form: {},
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
};


export const registerThunk = createAsyncThunk ('auth/registerThunk',async (input,thunkApi) => {
  try {
   const res = await authService.register(input);
   setAccessToken(res.data.accessToken);
  }catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
}) 

export const login = createAsyncThunk ('auth/login',async input => {
  try {const res = await authService.login(input);
  setAccessToken(res.data.accessToken)
  const resFetchMe = await authService.fetchMe()
  return resFetchMe.data.user
} catch (err) {
  return thunkApi.rejectWithValue(err.response.data.message);
}
})

export const formThunk = createAsyncThunk ('auth/formThunk',async (input,thunkApi) => {
  try {
    const res = await authService.form(input);
    setAccessToken(res.data.accessToken);
    return input 
  
  }catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
})


export const fetchMe = createAsyncThunk('auth/fetchMe',async (_,thunkApi) => {
 try {
  const res = await authService.fetchMe()
  return res.data.user
 } catch(err) {
  return thunkApi.rejectWithValue(err.response.data.message);
 }

})

export const logout = createAsyncThunk ('auth/logout', async () =>
removeAccessToken())


export const fetchForm = createAsyncThunk('auth/fetchForm', async (_,thunkApi) => {
 try {
  const res = await authService.fetchForm()
  return res.data
  
 } catch(err) {
  return thunkApi.rejectWithValue(err.response.data.message);
 }

})


export const deleteFormThunk = createAsyncThunk('auth/delete', async(id,thunkApi) => {
  try {
    

  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    
    extraReducers: builder => 
     builder 
     .addCase(logout.fulfilled,state => {state.user=null; state.isAuthenticated = false
    
    })
     .addCase(registerThunk.pending, state => {state.loading = true})
     .addCase(registerThunk.fulfilled,state =>{
         state.isAuthenticated = true;
         state.loading=false;
     })
     .addCase(registerThunk.rejected,state =>{
        state.error = action.payload;
        state.loading=false;
    }).addCase(login.fulfilled, (state,action) => {
      state.isAuthenticated = true
      state.user = action.payload
    }).addCase(formThunk.pending, state => {state.loading = true})
    .addCase(formThunk.fulfilled,(state,action) =>{
        state.isAuthenticated = true;
        state.form=action.payload
      })
      .addCase(fetchMe.fulfilled,(state,action) => {
        state.isAuthenticated= true;
        state.user = action.payload
        state.initialLoading = false
      }).addCase(fetchMe.rejected,(state,action) => {
        state.error=action.payload
        state.initialLoading = false
      }).addCase(fetchMe.pending, state => {
        state.initialLoading = true
      })

      .addCase(fetchForm.fulfilled,(state,action) => {
        state.isAuthenticated= true;
        state.form = action.payload
      }) 

})

export default authSlice.reducer;
