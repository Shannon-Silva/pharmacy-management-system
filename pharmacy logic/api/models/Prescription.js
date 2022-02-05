const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionItemSchema = new Schema({
    drug: {
        type: String,
        required: [true, 'drug name is required'],
    },
    price: Number,
    dosage: Number,
    frequency: String,
    duration: String,
    quantity: Number
});

const PrescriptionSchema = new Schema({
    prescribedDate: Date,
    dispensed: {type: Boolean, default: false},
    prescriptionItems: [PrescriptionItemSchema],
    patientID: {
        type: Number,
        required: [true, 'patient ID is required']
    },
    patientName: {
        type: String,
        required: [true, 'patient Name is required']
    }
}, {timestamps: true});

module.exports = mongoose.model('Prescription', PrescriptionSchema);