const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');








const userSchema = new mongoose.Schema({
    fullname: {
        firstname: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
        firstname: String,
        minlength: [3, 'last name must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        mainlength: [5, 'Email must be at last 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    socketID: {
        type: true,
    }
})

userSchema.method.generateAuthToken=function () {
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}
userSchema.method.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
}
userSchema.static.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}
const userModel = mongoose.model('user',userSchema);

module.exports=userModel;