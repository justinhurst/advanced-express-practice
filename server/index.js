// required packages
let express = require("express");
let bodyParser = require('body-parser');

// load data
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

// new express app
const app = express();

// tool to parse 'http message' body
app.use(bodyParser.json());

// comments path 
app.get("/comments",(req,res,next) => {
    return res.json(comments);
});
app.get("/comments/:id",(req,res,next) => {
    let foundComment = comments.find( (comment) => comment._id == req.params.id );
    return res.json(foundComment);
});
app.post("/comments",(req,res,next) => {
    req.body._id = comments.length + 1;
    req.body.postId = 1;
    comments.push(req.body);
    return res.json(comments);
});
// comment path
app.get("/comment/:id",(req,res,next) => {
    let foundComment = comments.find( (comment) => comment._id == req.params.id );
    return res.json(foundComment);
});

// contacts path
app.get("/contacts",(req,res,next) => {
    return res.json(contacts);
});
app.get("/contacts/:id",(req,res,next) => {
    let foundContact = contacts.find( (contact) => contact._id == req.params.id );
    return res.json(foundContact);
});
app.post("/contacts",(req,res,next) => {
    req.body._id = contacts.length + 1;
    contacts.push(req.body);
    return res.json(contacts);
});
// contact path
app.get("/contact/:id",(req,res,next) => {
    let foundContact = contacts.find( (contact) => contact._id == req.params.id );
    return res.json(foundContact);
});

// vehicles path
app.get("/vehicles",(req,res,next) => {
    return res.json(vehicles);
});
app.get("/vehicles/:id",(req,res,next) => {
    let foundVehicle = vehicles.find( (vehicle) => vehicle._id == req.params.id );
    return res.json(foundVehicle);
});
app.post("/vehicles",(req,res,next) => {
    req.body._id = vehicles.length + 1 ;
    vehicles.push(req.body);
    return res.json(vehicles);
});
// vehicle path
app.get("/vehicle/:id",(req,res,next) => {
    let foundVehicle = vehicles.find( (vehicle) => vehicle._id == req.params.id );
    return res.json(foundVehicle);
});

// products path
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