const express = require("express");
const router = express.Router();
const displayPages = require("./middleware/displayPages")

router.get("/",displayPages.displayLandPage);

router.get("/all",displayPages.displayAllCoordinates);

router.get("/coordinate/:name",displayPages.displayOneCoordinates);

router.get("/pixel",displayPages.displayGamePixel);

router.use((req,res)=>{
    res.status(404).render("404");
});

module.exports = router;