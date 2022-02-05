const Prescription = require('../models/Prescription');
const Drug = require('../models/Drug');

module.exports.addPrescription = (prescription) => {
    return Prescription.create(prescription);
}

module.exports.getPrescriptions = (undispensed) => {
    if(undispensed) {
        return Prescription.find({dispensed: false});
    } else {
        return Prescription.find({});
    }
}

module.exports.getPrescriptionsByName = (name) => {
    return Prescription.find({patientName: name});
}

module.exports.getPrescriptionsByPatientID = (id) => {
    return Prescription.find({patientID: id});
}

module.exports.dispense = (prescription) => {
    console.log("dispensed :" + prescription._id);
    return new Promise((resolve, reject)=>{
        if(prescription.prescriptionItems){
            prescription.prescriptionItems.forEach((item)=>{
                const negative = item.quantity * -1;
                console.log(item.drug);
                Drug.findOneAndUpdate({"name": item.drug}, {"$inc": {"stock":  negative}}).then((result)=>{
                    // TODO: add handler for successful update
                }).catch((err)=>{
                    reject(err);
                });
            });
            Prescription.findByIdAndUpdate(prescription._id, {dispensed:true}, {new:true}).then((result)=>{
                console.log(result)
                resolve("result OK : " + result);
            }).catch((err)=>{
                reject(err)    
            });
        } else {
            reject(new Error('error: could not find prescription items'));
        }
    })
    
}