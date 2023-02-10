const express = require("express");
const router = require("./router");
const dotenv = require("dotenv").config();
const cors = require("cors");
require("./conn");
const app = express();
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});