//ag - Import express
const express  = require('express');
const route = require('./routes/route');
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/support', route);
//ag - lancement du serveur sur le port 8080
app.listen(8080, () => {
    console.log("connexion au port 8080");
});