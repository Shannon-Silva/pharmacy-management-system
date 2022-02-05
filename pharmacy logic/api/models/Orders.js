const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema= new Schema({
    orderID: Number,
    from: String,
    to:String,
    subject : String,
    content:String
   
});

module.exports = mongoose.model('Orders',OrderSchema);
