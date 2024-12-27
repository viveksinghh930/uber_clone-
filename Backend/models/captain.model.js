const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainSchema = new mongoose.Schema({

    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        }, // Correctly applying
        lastname: {
            type: String,
            minlength: [3, 'lastname must be at least 3 characters long']
        } // Correctly applying minlength
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketID: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'plate must be at least 3 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }






    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}



const captainModel = mongoose.model('captain', captainSchema);


module.exports = captainModel;
