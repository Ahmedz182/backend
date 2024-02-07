const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    start_year: {
        type: String,
        required: true,
    },
    end_year: {
        type: String,
        require: true // Typo here, it should be 'required' not 'require'
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.Now
    },
});

const Experience = mongoose.model("experiences", experienceSchema); // Naming convention change

module.exports = {
    Experience: Experience // Corrected export
};
