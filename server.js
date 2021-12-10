// ce sera toujours le meme fichier server !
// https://github.com/O-clock-Zagreus/S03E05-EJS-BNoClock

const express = require("express");
const router = require("./app/router");
const server = express();
var bodyParser = require('body-parser');

// pour req.body 
server.use(bodyParser.urlencoded({extended: true}));

// On va indiquer quel moteur de modèles on utilise
server.set('view engine', 'ejs');
// On indique le dossier des modèles EJS
server.set('views', './app/views');

// On va ajouter le dossier public à nos routes
server.use(express.static('public'));
// On ajoute le routeur
server.use(router);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});