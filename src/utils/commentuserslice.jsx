import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_VALUE } from "./constant";

const commentuserslice=createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        addUserSection:(state,action)=>{
            state.users.splice(OFFSET_VALUE,1)
            state.users.unshift(action.payload)
        }
    }
})


export const {addUserSection}=commentuserslice.actions;
export default commentuserslice.reducer;