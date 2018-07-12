import axios from 'axios';

export const empresaService = {
    getByCNPJ
};

function getByCNPJ(cnpj) {
    const requestOptions = {
        headers: '',
    };
    return axios.post(`/quote?cnpj=${cnpj}`, requestOptions).catch(error => {
        if (error.response.status === 401) {
            
        }
    })
}

