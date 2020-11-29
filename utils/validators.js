const validateName = name => {
    if (name == null || name == undefined) {
        let message = {
            err: "Name should not be empty",
            success: false
        }
        return message;
    }
    else if (name.length < 3) {
        let message = {
            err: "Name should be at least 3 charcters long",
            success: false
        }
        return message;
    }
    else if (name.length > 20) {
        let message = {
            err: "Name should be at most 20 charcters long",
            success: false
        }
        return message;
    }
    else {
        let message = {
            err: null,
            success: true
        };
        return message;
    }
}


const validateEmail = email => {
    if (email == null || email == undefined) {
        let message = {
            err: "Email should not be empty",
            success: false
        }
        return message;
    }

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(email)) {
        let message = {
            err: null,
            success: true
        };
        return message;
    } else {
        let message = {
            err: "Email is not recognized",
            success: false
        };
        return message;
    }
}


const validatePassword = password => {
    if (password == null || password == undefined) {
        return {
            err: "Password should not be empty",
            success: false
        };
    }
    if (password.length < 3) {
        return {
            err: "Password should be at least 3 charcters long",
            success: false
        };
    }
    if (password.length > 32) {
        return {
            err: "Password should be at most 32 charcters long",
            success: false
        };
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,32}$/;
    if (regex.test(password)) {
        return {
            err: null,
            success: true
        };
    } else {
        return {
            err: "Password should contain at least one uppercase letter, one lowercase letter,one number and one special character",
            success: false
        };
    }
}


module.exports = {
    validateName,
    validateEmail,
    validatePassword
}