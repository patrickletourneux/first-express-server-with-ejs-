const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/all",(req,res)=>{
    const coordinates = require("./data/coordinates");
    console.log('all')
    res.render("all",{
        coordinates:coordinates
    });
});


router.get("/coordinate/:name",(req,res)=>{
    const coordinates = require("./data/coordinates");
    const coordinate = coordinates.find(coordinate => coordinate.name.toLowerCase() == req.params.name.toLowerCase());
    console.log(coordinate);
    if (coordinate){
        res.render("person",{
            coordinate:coordinate
        });
    } else{
        res.sendStatus(404);
        // res.end();
    }
});

module.exports = router;