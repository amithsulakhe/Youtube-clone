import { createSlice } from "@reduxjs/toolkit";

const sidebarslice=createSlice({
    name:"sidebar",
    initialState:{
        isMenu:false
    },
    reducers:{
        togglesidebar:(state,action)=>{
            state.isMenu=!state.isMenu
        },
        closesidebar:(state)=>{
            state.isMenu=false
        }
    }
})
export const {togglesidebar,closesidebar}=sidebarslice.actions
export default sidebarslice.reducer