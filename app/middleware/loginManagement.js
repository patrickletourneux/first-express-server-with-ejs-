const loginManagement = {
    validLogin : (req,res,next)=> {
        console.log("post receiv");
        console.log('req.body:', req.body);
        const usersIdPassword = require("../data/usersIdPassword");
        for (let person of usersIdPassword){
            if (person.id ===req.body.id && person.password.toString() ===req.body.password) {
                console.log('person validee : ',person)
            }
        }
        // console.log('req:', req)
        next();
    }
}

module.exports = loginManagement;