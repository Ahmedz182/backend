const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connect = mongoose.connection;
connect.on("error", () => {
    console.log("Error connecting to the database");
});
connect.on("connected", () => {
    console.log("Connection to the database successful");

});


module.exports = connect;