import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../redux/reducers/search'

export default configureStore({
    reducer: {
        search: searchReducer,
    },
});