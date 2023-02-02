const dotenv = require('dotenv').config({ path: "./config.env" });
const fs = require('fs');
const express = require('express');

const app = express();

console.log(process.env.PORT)

const PORT = process.env.PORT || 3001;

app.get("/novels", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
} );