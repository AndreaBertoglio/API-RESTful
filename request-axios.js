//Operazioni CRUD usando il package 'axios', molto meglio rispetto agli altri due tipi di request!
const axios = require('axios');
const url = require('url');
axios.defaults.baseURL = 'http://localhost:3000';
let body = {
    "codice": "DSR007349",
    "descrizione": "SLAB GATE",
    "quantità": "2",
    "udm": "nr",
    //"note": "nota",
    "tipologia": "SL",
    "codice_padre": "DAS001048"
};
const codice_parte = "DSR007349";
const params = new url.URLSearchParams({ id: codice_parte });

//getCollection();
//getElementWithId(params);
//addElement(body);
//updateElementWithId(params, body);
//deleteElementWithId(params);

function errorManagment(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
        if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
}

async function getCollection() {
    try {
        const response = await axios.get('/codes');
        const json = response.data;
        console.log(json.message);
        console.log(JSON.stringify(json.data));
    } catch (error) {
        errorManagment(error);
        /* if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
            if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        //console.log(error.config); */
    }
}

async function getElementWithId(params) {
    try {
        //const response = await axios.get('/codes/' + id);
        const response = await axios.get('/codes/' + params.toString());
        const json = response.data;
        console.log(json.message);
        console.log(JSON.stringify(json.data));
    } catch (error) {
        errorManagment(error);
        /* if (error.response) {
            console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
            if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        } */
    }
}

async function addElement(body) {
    try {
        const response = await axios.post('/codes', body);
        const json = response.data;
        console.log(json.message);
    } catch (error) {
        errorManagment(error);
        /* if (error.response) {
            console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
            if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        } */
    }
}

async function updateElementWithId(params, body) {
    try {
        const response = await axios.put('/codes/' + params.toString(), body);
        const json = response.data;
        console.log(json.message);
    } catch (error) {
        errorManagment(error);
        /* if (error.response) {
            console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
            if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        } */
    }
}

async function deleteElementWithId(params) {
    try {
        const response = await axios.delete('/codes/' + params.toString(), body);
        const json = response.data;
        console.log(json.message);
    } catch (error) {
        errorManagment(error);
        /* if (error.response) {
            console.log(`Stato HTTP della risposta: ${error.response.status} (${error.response.statusText})`);
            if (error.response.data.errorMessage) console.log(`${error.response.data.errorMessage}`);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        } */
    }
}