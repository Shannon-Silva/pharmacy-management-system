const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodReceivedNotesSchema= new Schema({
    noteID: Number,
    supplier:String,
    orderQuantity : Number,
    deliveredQuantity : Number,
    amount: Number
});

module.exports = mongoose.model('GoodReceivedNotes',GoodReceivedNotesSchema);


