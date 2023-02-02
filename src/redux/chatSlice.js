import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chatSlice",
    initialState:["jsadhkjdh","kjdhkqehdj"],
    reducers:{
        addItem:(state,action)=>{
            state.splice(20,1);
            state.unshift(action.payload);
        },
    }
});

export const {addItem} = chatSlice.actions;
export default chatSlice.reducer;