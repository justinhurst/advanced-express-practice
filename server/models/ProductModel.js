let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    active:{
        type: Boolean
    },
    updated:{
        type: Boolean
    },
    name : {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("Product", schema);