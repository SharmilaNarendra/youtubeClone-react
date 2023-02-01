import {createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name:"vedioData",
    initialState:{
        vedioList:[]
    },
    reducers:{
        cacheVedios:(state,action)=>{
            state.vedioList = action.payload;
        }
    }
});

export const {cacheVedios} = dataSlice.actions;
export default dataSlice.reducer;

