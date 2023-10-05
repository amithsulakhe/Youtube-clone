import { createSlice } from "@reduxjs/toolkit";

const darkmodeenable=createSlice({
    name:"mode",
    initialState:{
        isMode:true
    },
    reducers:{
        adddarkmodetheme:(state,action)=>{
            state.isMode=!state.isMode
        }
    }
})



export const {adddarkmodetheme}=darkmodeenable.actions
export default darkmodeenable.reducer