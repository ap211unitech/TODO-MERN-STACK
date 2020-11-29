const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const jwtsecret = config.get("jwtsecret");

//Validators
const { validateName, validateEmail, validatePassword } = require("../../utils/validators")

//UserModel
const UserModel = require("../../models/user");

/*************************************************** EndPoints ************************************************** */

// @Route     POST /users
// @Desc      Register a new user
// @Access    Public
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const validatingName = validateName(name);
    const validatingEmail = validateEmail(email);
    const validatingPassword = validatePassword(password);

    if (!validatingName.success) {
        return res.status(400).json(validatingName);
    }

    if (!validatingEmail.success) {
        return res.status(400).json(validatingEmail);
    }

    if (!validatingPassword.success) {
        return res.status(400).json(validatingPassword);
    }

    try {
        let findUser = await UserModel.findOne({ email });
        if (findUser) {
            let message = {
                err: "User already exists",
                success: false
            }
            return res.status(400).json(message);
        }
        else {
            try {
                bcryptjs.genSalt(10, async (err, salt) => {
                    bcryptjs.hash(password, salt, async (err, hash) => {
                        
                        if (err) throw err;
                        
                        let User = new UserModel({ name, email, password: hash });
                        let newUser = await User.save();
                        
                        jwt.sign(
                            { id: newUser._id },
                            jwtsecret,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    token,
                                    user: newUser
                                })
                            }
                        )
                    })
                });

            } catch (error) {
                return res.json(error)
            }
        }
    } catch (error) {
        return res.json(error);
    }
})

module.exports = router;