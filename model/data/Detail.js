const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});

const Detail = mongoose.model("details", detailSchema); // Naming convention change

module.exports = {
    Detail: Detail // Corrected export
};
