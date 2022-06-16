require("dotenv").config();
const express = require("express");
const sequelize = require("./db")
const PORT = process.env.PORT || 5000;
const models = require("./models/models")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const router = require("./routes/index")
const erroeHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require('path')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use("/api", router)

// Call last
app.use(erroeHandler)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Port server ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();