import store from "../store";
import {searchAuthorByName} from "../../services/searchService";

export const startSearch = (query) =>{
    store.useDispatch(searchResults(query))
    return{
        type:'START_SEARCH',
    }
}

export const searchResults = (query) =>{
    const result = searchAuthorByName(query)

    return {
        type: 'SEARCH_RESULTS',
        payload: result,
    }
}

export const searchError = (error) =>{
    return{
        type:'SEARCH_ERROR',
        payload:error,
    }
}
