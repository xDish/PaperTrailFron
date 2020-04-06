import {createSlice} from "@reduxjs/toolkit";

export const searchSlice = createSlice({
   name:'search',
   initialState:{
       results: [],
       url:"",
   } ,
   reducers:{
       setSearchURL: (state,newURL) => {
           state.url = newURL.payload;
           console.log('changed to ' + newURL.payload);
       },
       startSearch: state => {
           console.log('searching ' +state.url);
       },
   }

});



export const {setSearchURL , startSearch} = searchSlice.actions;

export const selectURL = state => state.search.url;

export default  searchSlice.reducer;