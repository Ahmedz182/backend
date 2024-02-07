const mongoose = require('mongoose');

const introSchema = mongoose.Schema({
    salution: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc1: {
        type: String,
        required: true
    },
    desc2: {
        type: String,
        required: false,
    },
    skills: {
        type: Array,
        of: { type: String },
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
    linkdein: {
        type: String,
        required: false,
    },
    whatsapp: {
        type: String,
        required: false,
    }



});

const Intro = mongoose.model("intro", introSchema); // Naming convention change

module.exports = {
    Intro: Intro // Corrected export
};
