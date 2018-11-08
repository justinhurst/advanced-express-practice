let mongoose = require("mongoose");
// i want to code a definition of what a vehicle looks like

const schema = new mongoose.Schema({
    body: {
        type: String
    },
    updated: {
        type: Boolean
    },
    active: {
        type: Boolean
    }
});

module.exports =  mongoose.model("Comment", schema);