import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const appstore=configureStore({
    reducer:{
        sidebarname:sidebarSlice,

    }
})
export default appstore;