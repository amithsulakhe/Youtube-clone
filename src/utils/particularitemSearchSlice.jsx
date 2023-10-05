import { createSlice } from "@reduxjs/toolkit";

const particularitemSearchSlice=createSlice({
    name:"searcheditem",
    initialState:{
        founditem:null,
        searchitem:"kannada contents songs"
    },
    reducers:{
        addfounditems:(state,action)=>{
            state.founditem=action.payload
        },
        addSearchitem:(state,action)=>{
            state.searchitem=action.payload
        }
    }
})


export const  {addfounditems,addSearchitem}=particularitemSearchSlice.actions
export default particularitemSearchSlice.reducer
