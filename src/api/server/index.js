const dotenv = require('dotenv').config({ path: "./config.env" });
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', true);
mongoose.connect(DB)
    .then(con => {
        console.log('Connected!')
    });

app.get("/novels", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
} );