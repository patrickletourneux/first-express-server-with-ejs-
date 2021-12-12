displayPages = {
    displayLandPage : (req,res)=>{
        console.log('########################dans displayLandPage')
        const coordinates = require("../data/coordinates");
        // res.locals.connectedUser = 'a';
        res.render("index",{
            coordinates:coordinates
        })
    },
    displayAllCoordinates : (req,res,next)=>{
        console.log('########################dans displayAllCoordinates')
        console.log('res.locals.connectedUser:', res.locals.connectedUser)
        if (res.locals.connectedUser){
            const coordinates = require("../data/coordinates");
            console.log('all')
            res.render("all",{
                coordinates:coordinates
            });
        } else {
            next()
        }
    },
    displayOneCoordinates : (req,res,next)=>{
        console.log('########################dans displayOneCoordinates')
        const coordinates = require("../data/coordinates");
        const coordinate = coordinates.find(coordinate => coordinate.name.toLowerCase() == req.params.name.toLowerCase());
        console.log(coordinate);
        if (coordinate && res.locals.connectedUser){
            res.render("person",{
                coordinate:coordinate
            });
        } else{
            next()
            // res.end();
        }
    },
    displayGamePixel : (req,res)=>{
        console.log('########################dans displayGamePixel')
        const pixel = true;
        console.log('pixel')
        res.render("pixel",{
            pixel
        });
    },
    displayGameMorpion : (req,res)=>{
        console.log('########################dans displayGameMorpion')
        // const pixel = false;
        console.log('pixel')
        res.render("morpion");
    }
}


module.exports = displayPages;