import Axios from 'axios';

const http = Axios.create({
    baseURL:'http://192.168.1.248:8080/api/'
})
export const searchAuthorByName = query => {
    return http.get(`search/author/name/${query}`)
                .then(response => response.data)
                .catch(error => error);
}

