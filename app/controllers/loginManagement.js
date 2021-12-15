const loginManagement = {
    connectedUser :{
        id :undefined
    },
    validLogin : (req,res,next)=> {
        console.log("post receiv");
        console.log('req.body:', req.body);
        const usersIdPassword = require("../data/usersIdPassword");
        for (let person of usersIdPassword){
            if (person.id ===req.body.id && person.password.toString() ===req.body.password) {
                console.log('person validee : ',person)
                loginManagement.connectedUser.id = person.id;
                console.log('loginManagement.connectedUser:', loginManagement.connectedUser)
                res.locals.connectedUser = loginManagement.connectedUser;
                console.log('res.locals.connectedUser:', res.locals.connectedUser);
            }
        }
        // console.log('req:', req)
        displayPages.displayLandPage(req,res,next);      
    }
}

module.exports = loginManagement;