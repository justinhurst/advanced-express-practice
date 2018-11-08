// required packages
let express = require("express");
let bodyParser = require('body-parser');
let mongoose = require("mongoose");

// new express app
const app = express();

// tool to parse 'http message' body
app.use(bodyParser.json());

// mongoose boilerplate
mongoose.Promise = global.Promise;
// mongoose connect to mlab database
mongoose.connect("mongodb://admin:heyyou11@ds151943.mlab.com:51943/express-practice");

// comments path 
let CommentRoutes  = require("./routes/CommentRoutes");
app.use(CommentRoutes);

// contacts path
let ContactRoutes  = require("./routes/ContactRoutes");
app.use(ContactRoutes);

// vehicles path
let VehicleRoutes  = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);

// products path
let ProductRoutes  = require("./routes/ProductRoutes");
app.use(ProductRoutes);

// first way we learned how to do these
// here is that way for reference
// this is what the files in the routes and controllers directories are doing
    // storing them in their own directories is more organized

// load data
// let products = require("./products");

/*
app.get("/products",(req,res,next) => {
    return res.json(products);
});
app.get("/products/:id",(req,res,next) => {
    let foundProduct = products.find( (product) => product._id == req.params.id );
    return res.json(foundProduct);
});
app.post("/products",(req,res,next) => {
    req.body._id = products.length + 1 ;
    products.push(req.body);
    return res.json(products);
});

// product (no 's') path
app.get("/product/:id",(req,res,next) => {
    let foundProduct = products.find( (product) => product._id == req.params.id );
    return res.json(foundProduct);
});
*/

// if nothing is found
app.use((req,res,next) => {
    return res.send('please provide a valid path and method');
});

//listen on 3001
app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now running in port 3001");
});