const express = require("express");
const router = require("./router");
const dotenv = require("dotenv").config();
require("./conn");
const app = express();

app.use(router);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});