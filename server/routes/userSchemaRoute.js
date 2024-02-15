const express = require( "express" );
const userRegisterController = require( "../controllers/userSchemaControllers" )


const router = express.Router();
router.post( '/register', userRegisterController.createUsers );

module.exports = router