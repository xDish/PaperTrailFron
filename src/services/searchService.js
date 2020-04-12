import axios from 'axios';
import store from "../redux/store";




function searchService (target, query){

    let url = '';
    switch(target){
     case 'author':
         url = 'http://192.168.1.248:8080/api/search/author/name/'+query;
         break;
     default:
         url = 'http://192.168.1.248:8080/api/search/author/name/' +query;
         break;
     }

     store.dispatch((dispatch) => {
         dispatch({ type: "SEARCH_START"})
         axios.get(url)
             .then((response)=>{
                 dispatch({type: "SEARCH_RESULTS", payload: response.data})
             })
             .catch((error) => {
                 dispatch({type:"SEARCH_ERROR", payload:error})
             })
     })




}
