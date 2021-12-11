displayPages = {
    displayLandPage : (req,res)=>{
        const coordinates = require("../data/coordinates");
        // res.locals.connectedUser = 'a';
        res.render("index",{
            coordinates:coordinates
        })
    },
    displayAllCoordinates : (req,res)=>{
        const coordinates = require("../data/coordinates");
        console.log('all')
        res.render("all",{
            coordinates:coordinates
        });
    },
    displayOneCoordinates : (req,res,next)=>{
        const coordinates = require("../data/coordinates");
        const coordinate = coordinates.find(coordinate => coordinate.name.toLowerCase() == req.params.name.toLowerCase());
        console.log(coordinate);
        if (coordinate){
            res.render("person",{
                coordinate:coordinate
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
        // const pixel = false;
        console.log('pixel')
        res.render("morpion");
    }
}


module.exports = displayPages;