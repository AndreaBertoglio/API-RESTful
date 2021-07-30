//Operazioni CRUD usando il package 'node-fetch' NON PIU USATO!
const fetch = require('node-fetch');
let element = {
    "codice": "DSR007349X",
    "descrizione": "PUP SLAB GATE",
    "quantità": "2",
    "udm": "nr",
    //"note": "nota",
    "tipologia": "SL",
    "codice_padre": "DAS001048"
};

//Controlla che la richiesta al server sia andata a buon fine,
//NB: usandolo non riesco a mostrare il messaggio di errore del result
function checkResponseStatus(res) {
    if (res.ok) { //True se lo stato della risposta è 2xx
        return res;
    } else {
        //TODO provare a rendere più specifici i messaggi di errore a seconda dei casi, magari aggiungendo l'error message passato nel result

        //res.json().then(json => console.log(json)).catch(err => console.log(err)); //PB con le promise
        if(res.status>=500){
            //Errore lato server del tipo 5xx
            throw new Error(`Stato HTTP della risposta: ${res.status} (${res.statusText})`);
        } 
        if(res.status>=400){
            //Invalid request del tipo 4xx
            throw new Error(`Stato HTTP della risposta: ${res.status} (${res.statusText})`);
        } 
        if(res.status>=300){
            //Errore lato client del tipo 3xx
            throw new Error(`Stato HTTP della risposta: ${res.status} (${res.statusText})`);
        }
        //Errore del tipo 1xx
        if(res.status>=100) throw new Error(`Stato HTTP della risposta: ${res.status} (${res.statusText})`);
    }
}

//Inizializzo status e statusText, usati per memorizzare parametri del result e stamparli in caso di errore
/* let status = 0;
let statusText = "";
let statusOk = false; */

//Aggiunta di un elemento
/* fetch('http://localhost:3000/codes', {
    method: 'POST',
    body: JSON.stringify(element),
    headers: { 'Content-Type': 'application/json' }
})
    //.then(checkResponseStatus)
    .then(res => {
        res.json().then(json => { 
            if(res.ok) console.log(json.message);
            else {
                throw new Error(`Stato HTTP della risposta: ${res.status} (${res.statusText}) \n${json.errorMessage}`);
            }
        }).catch(err => console.log(err));
    }) 
    .catch(err => console.log(err)); */

//Get di tutti gli elementi
/* fetch('http://localhost:3000/codes')
    //.then(checkResponseStatus)
    .then(res => {
        status = res.status;
        statusText = res.statusText;
        statusOk = res.ok;
        return res.json();
    }) 
    .then(json => { 
        if(statusOk) console.log(json.message + "\n" + JSON.stringify(json.data));
        else {
            throw new Error(`Stato HTTP della risposta: ${status} (${statusText}) \n${json.errorMessage}`);
        }
    })
    .catch(err => console.log(err)); */

//Get di un elemento dato il codice
/* let getId="DSR007349";
fetch('http://localhost:3000/codes/id='+getId)
    //.then(checkResponseStatus)
    .then(res => {
        status = res.status;
        statusText = res.statusText;
        statusOk = res.ok;
        return res.json();
    }) 
    .then(json => { 
        if(statusOk) console.log(json.message + "\n" + JSON.stringify(json.data[0]));
        else {
            throw new Error(`Stato HTTP della risposta: ${status} (${statusText}) \n${json.errorMessage}`);
        }
    })
    .catch(err => console.log(err)); */


//Update di un elemento dato il codice
/* let updateId="DSR007349X";
fetch('http://localhost:3000/codes/id='+updateId, {
    method: 'PUT',
    body: JSON.stringify(element),
    headers: { 'Content-Type': 'application/json' }
})
    //.then(checkResponseStatus)
    .then(res => {
        status = res.status;
        statusText = res.statusText;
        statusOk = res.ok;
        return res.json();
    }) 
    .then(json => { 
        if(statusOk) console.log(json.message);
        else {
            throw new Error(`Stato HTTP della risposta: ${status} (${statusText}) \n${json.errorMessage}`);
        }
    })
    .catch(err => console.log(err)); */


//Delete di un utente dato il codice
/* let deleteId="DSR007349X";
fetch('http://localhost:3000/codes/id='+deleteId, {
    method: 'DELETE',
    body: JSON.stringify(element),
    headers: { 'Content-Type': 'application/json' }
})
    //.then(checkResponseStatus)
    .then(res => {
        status = res.status;
        statusText = res.statusText;
        statusOk = res.ok;
        return res.json();
    }) 
    .then(json => { 
        if(statusOk) console.log(json.message);
        else {
            //console.log(json.errorMessage);
            throw new Error(`Stato HTTP della risposta: ${status} (${statusText}) \n${json.errorMessage}`);
        }
    })
    .catch(err => console.log(err)); */