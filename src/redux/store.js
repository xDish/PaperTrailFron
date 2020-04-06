import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../redux/slices/searchSlice'
export default configureStore({
    reducer: {
        placeholder : 'bla',
        search: searchReducer,
    },
});