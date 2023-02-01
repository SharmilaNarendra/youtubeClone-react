import {createSlice} from "@reduxjs/toolkit"

const appSlice= createSlice({

    name:"appSlice",
    initialState:{
        openMenu: true,
    },
    reducers:{
      toggleMenu: (state)=>{
       state.openMenu = !state.openMenu
      },
      hideMenu: (state)=>{
        state.openMenu = false;
      },
      showMenu: (state)=>{
        state.openMenu = true;
      },
    }
});

export const {toggleMenu, hideMenu, showMenu} = appSlice.actions;

export default appSlice.reducer;