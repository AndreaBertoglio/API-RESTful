//Operazioni CRUD usando il package 'request' NON PIU USATO!
//PROBLEMA: il package è deprecato! A questo link lista di package alternativi: https://github.com/request/request/issues/3143
const request = require ('request'); 
const json = {
    "codice": "DSR007368",
    "descrizione": "BODY SLAB GATE",
    "quantità": "1",
    "udm": "nr",
    //"note": "nota",
    "tipologia": "SL",
    "codice_padre": "DAS001048"
};

//Aggiunta di un elemento
request.post({
    url:'http://localhost:3000/codes', 
    body:json, 
    json: true},
    function (error, response, body){
        if(error) return console.log(error);
        console.log (body);
    }
);

/* //Get di tutti gli elementi
request.get({
    url:'http://localhost:3000/codes'},
    function (error, response, body){
        if(error) return console.log(error);
        //QUI roba da fare con gli el
        console.log (body);
    }
); */

/* //Get di un elemento dato il codice
const id=1;
request.get({
    url:'http://localhost:3000/codes/'+id},
    function (error, response, body){
        if(error) return console.log(error);
        //QUI roba da fare con l'utente
        console.log (body);
    }
); */

/* //Update di un elemento dato il codice
const id="DSR007368";
request.put({
    url:'http://localhost:3000/codes/'+id, 
    body:json, 
    json: true},
    function (error, response, body){
        if(error) return console.log(error);
        console.log (body);
    }
); */

/* //Delete di un utente dato il codice
const id="DSR007368";
request.delete({
    url:'http://localhost:3000/codes/'+id, 
    body:json, 
    json: true},
    function (error, response, body){
        if(error) return console.log(error);
        console.log (body);
    }
); */