const { Schema, model} = require("mongoose");

const cropSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
}, { timestamps: true});

const Crop = model("Crop", cropSchema);

module.exports = Crop;