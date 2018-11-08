let mongoose = require("mongoose");
// i want to code a definition of what a vehicle looks like

const schema = new mongoose.Schema({
    year: {
        type: Number
    },
    make: {
        type: String
    },
    mileage: {
        type: Number
    },
    active : {
        type: Boolean
    },
    model : {
        type: String
    }
});

module.exports =  mongoose.model("Vehicle", schema);