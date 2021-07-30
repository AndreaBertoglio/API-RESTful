const pool = require('../data/config');
//NOTA: in caso di errori viene settato lo stato e inviato un messaggio di errore, così da avere messaggi più dettagliati

const router = app => {
    //Route di default
    //Per vederla localhost::3000
    app.get('/', (req, res) => {
        console.log(`URL: ${req.url}`);
        res.send({
            message: 'Node.js e Express REST API'
        });
    });

    //Get di tutti gli elementi
    //Per vederla localhost::3000/codes

    app.get('/codes', (req, res) => {
        pool.query('SELECT * FROM codiceparte', (error, result) => {
            if (error) {
                res.status(500).send({ 
                    errorMessage: `${error}`
                });
            }
            else res.send({
                data: result,
                message: `Lista degli elementi della collezione`
            });
        });
    });

    //Get di un elemento specifico tramite codice (alla fine esempio per get con più parametri)
    //Per vederla localhost::3000/codes/id

    app.get('/codes/id=:id', (req, res) => {
        // reading id from the URL
        const id = req.params.id;

        pool.query('SELECT * FROM codiceparte WHERE codice=?', id, (error, result) => {
            if (error) {
                res.status(500).send({ 
                    errorMessage: `${error}`
                });
            }
            else {
                if (result[0] != null) res.send({
                    data: result,
                    message: `Elemento con codice ${id}`
                });
                else return res.status(404).send({
                    errorMessage: `Nessun elemento con codice ${id} trovato`
                });
            }
        });
    });

    //Aggiunta di un elemento tramite post

    app.post('/codes', (req, res) => {
        const codiceparte = req.body;
        pool.query('INSERT INTO codiceparte SET ?', codiceparte, (error, result) => {
            if (error) {
                res.statusText = `${error}`;
                res.status(500).send({ 
                    errorMessage: `${error}`
                });
            }
            else {
                res.status(201).send({
                    message: `Elemento aggiunto con successo.`
                });
            }
        });
    });

    //Aggiorna elemento con codice

    app.put('/codes/id=:id', (req, res) => {
        // reading id and new user from the URL
        const id = req.params.id;
        const codiceparte = req.body;

        pool.query('UPDATE codiceparte SET ? WHERE codice=?', [codiceparte, id], (error, result) => {
            if (error) {
                res.status(500).send({
                    errorMessage: `${error}`
                });
            }
            else {
                if (result.affectedRows == 0) res.status(404).send({
                    errorMessage: `Nessun elemento con codice ${id} trovato.`
                });
                else res.status(201).send({
                    message: `Elemento con codice ${id} aggiornato correttamente`
                });
            }
        });
    });

    //Elimina elemento con codice
    //Per farlo da cmd -> curl -X DELETE http://localhost:3000/codes/id 
    
    app.delete('/codes/id=:id', (req, res) => {
        // reading id from the URL
        const id = req.params.id;

        pool.query('DELETE FROM codiceparte WHERE codice=?', id, (error, result) => {
            if (error) {
                res.status(500).send({ 
                    errorMessage: `${error}`
                });
            }
            else {
                if (result.affectedRows == 0) res.status(404).send({
                    errorMessage: `Nessun elemento con codice ${id} trovato.`
                });
                else res.send({
                    message: `Elemento con codice ${id} eliminato correttamente`
                });
            }
        });
    });
}

/* app.get('/codes/:id/:udm', (req, res) => {
    // reading id from the URL
    const id = req.params.id;
    const udm = req.params.udm;

    pool.query('SELECT * FROM codiceparte WHERE codice=? AND udm=?', [id, udm], (error, result) => {
        if (error) {
            res.status(500).send({ //Per gli errori sulle query imposto lo stato a 500 
                errorMessage: `${error}`
            });
        }
        else {
            if (result[0] != null) res.send({
                data: result,
                message: `Elemento con codice ${id}`
            });
            else return res.status(404).send({
                errorMessage: `Nessun elemento con codice ${id} trovato`
            });
        }
    });
}); */

module.exports = router;
