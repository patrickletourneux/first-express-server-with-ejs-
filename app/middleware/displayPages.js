displayPages = {
    displayLandPage : (req,res)=>{
        const pixel = false;
        const coordinates = require("../data/coordinates");
        res.render("index",{
            coordinates:coordinates,
            pixel
        })
    },
    displayAllCoordinates : (req,res)=>{
        const pixel = false;
        const coordinates = require("../data/coordinates");
        console.log('all')
        res.render("all",{
            coordinates:coordinates,
            pixel
        });
    },
    displayOneCoordinates : (req,res,next)=>{
        const pixel = false;
        const coordinates = require("../data/coordinates");
        const coordinate = coordinates.find(coordinate => coordinate.name.toLowerCase() == req.params.name.toLowerCase());
        console.log(coordinate);
        if (coordinate){
            res.render("person",{
                coordinate:coordinate,
                pixel
            });
        } else{
            next()
            // res.end();
        }
    },
    displayGamePixel : (req,res)=>{
        const pixel = true;
        console.log('pixel')
        res.render("pixel",{
            pixel
        });
    },
    displayGameMorpion : (req,res)=>{
        const pixel = false;
        console.log('pixel')
        res.render("morpion",{
            pixel
        });
    }
}


module.exports = displayPages;