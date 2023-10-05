import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import particularitemSearchSlice from "./particularitemSearchSlice";
import commentuserslice from "./commentuserslice";
import darkmodeenable from "./darkmodeenable";
const appstore=configureStore({
    reducer:{
        sidebarname:sidebarSlice,
        searchedparticularitem:particularitemSearchSlice,
        commentslicer:commentuserslice,
        enabledarkmod:darkmodeenable

    }
})
export default appstore;