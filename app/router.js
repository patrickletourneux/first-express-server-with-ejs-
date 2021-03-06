const express = require("express");
const router = express.Router();
const displayPages = require("./controllers/mainController")
const loginManagement = require("./controllers/loginManagement")

router.get("/",displayPages.displayLandPage);

router.post("/",loginManagement.validLogin);
router.use((req,res,next)=>{
    res.locals.connectedUser = loginManagement.connectedUser.id;
    next();
});

router.get("/all",displayPages.displayAllCoordinates);

router.get("/coordinate/:name",displayPages.displayOneCoordinates);

router.get("/pixel",displayPages.displayGamePixel);
router.get("/morpion",displayPages.displayGameMorpion);



router.use((req,res)=>{
    res.status(404).render("404");
});

module.exports = router;