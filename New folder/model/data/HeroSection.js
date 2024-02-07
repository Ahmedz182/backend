const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    hireMeBtn: {
        type: String,
        required: true,
    },
    resumeBtn: {
        type: String,
        required: true,
    }
});

const HeroSection = mongoose.model("heroSection", heroSchema); // Naming convention change

module.exports = {
    HeroSection: HeroSection // Corrected export
};
