import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice";
import dataSlice from "./dataSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
 reducer:{
     app: appSlice,
     data: dataSlice,
     chat: chatSlice
    }
});

export default store;
