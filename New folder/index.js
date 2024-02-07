const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT;

const dbConfig = require("./config/dbConfig")
const auth = require("./routes/Auth")
const portfolioRouter = require("./routes/portfolioRouter")
const cors = require('cors');
app.use(cors());
app.use(express.json())

// app.use('/api/portfolio', portfolioRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/Auth', auth);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)

})