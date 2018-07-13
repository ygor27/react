import axios from 'axios';

export const empresaService = {
    getByCNPJ
};

function getByCNPJ(cnpj, callback) {
    const requestOptions = {
        headers: {Authorizations: 'Bearer 23456789' },
    };
    return axios.get(`/quote?cnpj=${cnpj}`, requestOptions) //https://jsonplaceholder.typicode.com/posts/1
    .then(resp => {
    	callback(resp.status, resp.data)
    })
    .catch(error => {
        if (error.response.status === 401) {

        }
        callback(error.response.status)
    })
}