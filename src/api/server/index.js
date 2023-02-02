const server = require( 'express' );

const app = server();

const PORT = process.env.PORT || 3001;

app.get("/novels", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}` );
} );