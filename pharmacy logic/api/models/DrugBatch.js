const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugBatchSchema= new Schema({
   batchID:Number,
   drugID:Number,
   expiryDate:Date,
   batchQuntity:Number
});

module.exports = mongoose.model('DrugBatch',DrugBatchSchema);