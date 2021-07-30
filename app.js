const express = require ('express');
const port = 3000;
const app = express();

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require ('./routes/routes');

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log (`Errore: ${error}`);
    console.log (`Server listening on port ${port}`);
});
