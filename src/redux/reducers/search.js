

const searchReducer =(state = {}, action) => {
    switch(action.type){
        case 'SEARCH_START':{
            return {
                ...state,
                fetching: true,
                fetched: false,
            }
        }
        case 'SEARCH_RESULTS':{
            return{
                ...state,
                fetching:false,
                fetched:true,
                results: action.payload,
            }
        }
        case 'SEARCH_ERROR':{
            return{
                ...state,
                fetching:false,
                fetched:false,
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