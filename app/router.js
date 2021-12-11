const express = require("express");
const router = express.Router();
const displayPages = require("./middleware/displayPages")
const loginManagement = require("./middleware/loginManagement")

router.get("/",displayPages.displayLandPage);

router.get("/all",displayPages.displayAllCoordinates);

router.get("/coordinate/:name",displayPages.displayOneCoordinates);

router.get("/pixel",displayPages.displayGamePixel);
router.get("/morpion",displayPages.displayGameMorpion);

router.post("/",loginManagement.validLogin);

router.use((req,res)=>{
    res.status(404).render("404");
});

module.exports = router;