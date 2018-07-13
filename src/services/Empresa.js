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
        callback(error.response.status)
    })
}



/*

    const requestOptions = {
        headers: {Authorizations: 'Bearer 23456789' },
    };
    return axios.get(`/base?id=222`, requestOptions).then(resp => {
    	console.log(resp)
    })
    .catch(error => {
        console.log(error.response.data)
        callback()
    })

    */