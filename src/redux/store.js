import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/';
import {composeWithDevTools} from "@reduxjs/toolkit/src/devtoolsExtension";

export default function configureStore(){
    return createStore(rootReducer,{}, composeWithDevTools());
};