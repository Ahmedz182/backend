const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
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

const Project = mongoose.model("projects", projectSchema); // Naming convention change

module.exports = {
    Project: Project // Corrected export
};
