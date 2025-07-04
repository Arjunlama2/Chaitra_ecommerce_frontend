import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:null,
    
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state,action)=>{
            const userData = action.payload
            localStorage.setItem('user_data',JSON.stringify(userData))
        },
        logout:()=>{
            localStorage.clear()

        }
    }



})
export const { login, logout } = userSlice.actions

export default userSlice.reducer