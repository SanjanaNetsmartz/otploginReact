const UserSchema = require("../models/userSchemaModel");

exports.createUsers = async ( req, res ) => {
    const {name, email, password} = req.body
    if ( !name || !email || !password ) {
        res.status( 400 ).json( {
            error: "Please enter all inputs!!"
        })
    }
    try {
        const preUser = await UserSchema.findOne( { email: email } );
        if ( preUser ) {
            res.status( 400 ).json( {
                status: "fail",
                error: "User already exists"
            })
        }
        else {
            const newUser = await UserSchema.create( {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                createdAt: req.body.createdAt
            } );
        
            return res.status( 200 ).json( {
                status: "success",
                data:{newUser}
            })
            
        }
       
    } catch ( error ) {
        res.status( 404 ).json( {
            success: "fail",
            message: error.message
        })
    }
    
}