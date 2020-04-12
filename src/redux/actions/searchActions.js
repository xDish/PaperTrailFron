export const startSearch = () =>{
    return{
        type:'START_SEARCH',
    }
}

export const searchResults = (result) =>{
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
