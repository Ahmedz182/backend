const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true  // Default value for new users (change as needed)
    },
    date: {
        type: Date,
        default: Date.Now
    }
});

const User = mongoose.model("user", userSchema);

module.exports = {
    User: User
};
