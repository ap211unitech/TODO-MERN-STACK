const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const jwtsecret = config.get("jwtsecret");
const auth = require("../../middlewares/auth");

//Validators
const { validateEmail, validatePassword } = require("../../utils/validators")

//UserModel
const UserModel = require("../../models/user");

/*************************************************** EndPoints ************************************************** */

// @Route     GET /users
// @Desc      Register a new user
// @Access    Public
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const validatingEmail = validateEmail(email);
    const validatingPassword = validatePassword(password);

    if (!validatingEmail.success) {
        return res.status(400).json(validatingEmail);
    }

    if (!validatingPassword.success) {
        return res.status(400).json(validatingPassword);
    }

    try {
        let findUser = await UserModel.findOne({ email });
        if (!findUser) {
            let message = {
                err: "User does not exists",
                success: false
            }
            return res.status(400).json(message);
        }
        else {
            try {
                //Comparing Password
                bcryptjs.compare(password, findUser.password)
                    .then(isMatch => {
                        if (!isMatch) {
                            return res.status(400).json({ msg: "Invalid credentials" })
                        }

                        jwt.sign(
                            { id: findUser._id },
                            jwtsecret,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                return res.status(200).json({
                                    token,
                                    user: findUser
                                })
                            }
                        )

                    })
            } catch (error) {
                return res.send(error)
            }
        }
    } catch (error) {
        return res.send(error);
    }
})


router.get('/user', auth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password');
        if (!user) throw Error('User does not exist');
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

module.exports = router;