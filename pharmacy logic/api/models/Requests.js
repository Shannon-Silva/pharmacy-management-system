const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema= new Schema({
    requestID: Number,
    drugName:String,
    requestedQuantity:Number,
    availableQuantity:Number,
    department : String,
    date:Date
});

module.exports = mongoose.model('Requests',RequestSchema);
