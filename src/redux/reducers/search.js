

const searchReducer =(state = {}, action) => {
    switch(action.type){
        case 'SEARCH_START':{
            return {
                ...state,
                isLoading:true,
            }
        }
        case 'SEARCH_RESULTS':{
            return{
                ...state,
                isLoading: false,
                results: action.payload,
            }
        }
        case 'SEARCH_ERROR':{
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        }
        default:{
            return{
                ...state
            }
        }

    }

}

export default searchReducer;