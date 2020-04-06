import {createSlice} from "@reduxjs/toolkit";

export const searchSlice = createSlice({
   name:'search',
   initialState:{
       results: [],
       url:"",
   } ,
   reducers:{
       setSearchURL: (state, newURL) => {
           state.url = newURL.payload.value;
           console.log('changed to ' + newURL.payload.value);
       },
       startSearch: state => {
           console.log('searching' +state.url.value);
       },
   }

});

export const {setSearchURL , startSearch} = searchSlice.actions;

export default  searchSlice.reducer;