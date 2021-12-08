const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    const pixel = false;
    const coordinates = require("./data/coordinates");
    res.render("index",{
        coordinates:coordinates,
        pixel
    });
});

router.get("/all",(req,res)=>{
    const pixel = false;
    const coordinates = require("./data/coordinates");
    console.log('all')
    res.render("all",{
        coordinates:coordinates,
        pixel
    });
});

router.get("/pixel",(req,res)=>{
    const pixel = true;
    // jeu a integrer
    console.log('pixel')
    res.render("pixel",{
        pixel
    });
});


router.get("/coordinate/:name",(req,res)=>{
    const pixel = false;
    const coordinates = require("./data/coordinates");
    const coordinate = coordinates.find(coordinate => coordinate.name.toLowerCase() == req.params.name.toLowerCase());
    console.log(coordinate);
    if (coordinate){
        res.render("person",{
            coordinate:coordinate,
            pixel
        });
    } else{
        res.sendStatus(404);
        // res.end();
    }
});

module.exports = router;