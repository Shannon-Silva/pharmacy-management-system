const DrugBatchModal = require('../models/DrugBatch');

var DrugBatchController = function(){
    this.addDrugBatch = (data)=>{
        return new Promise ((resolve,reject)=>{
            var drugBatch = new DrugBatchModal({
                batchID:data.batchID,
                drugID:data.drugID,
                expiryDate:data.expiryDate,
                batchQuntity:data.batchQuntity,
            });
            drugBatch.save().then(()=>{
                resolve({status: 200, message: "Succesfully added new drugbatch"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        });
    }

    this.UpdateDrugbatch = (id,data)=>{
        return new Promise((resolve,reject)=>{
            DrugBatchModal.update({_id:id},data).then(()=>{
                    resolve({status: 200, message: "succesfully updated the drugbatch"});
                }).catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                });
        });
    }

    this.GetAllDrugsbatch = ()=>{
        return new Promise((resolve,reject)=>{
            DrugBatchModal.find().populate('Drug').exec().then((batch)=>{
            resolve({status: 200, data: batch});
        }).catch(err => {
            reject({status: 500, message: "Cant find Error:- " + err});
        });
    });
}
    
    this.findABatch = (id)=>{
        return new Promise((resolve, reject) => {
            DrugBatchModal.find({_id:id}).populate('Drug').exec().then((batch)=>{
                resolve({status: 200, data: batch});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.DeleteABatch = (id)=>{
        return new Promise((resolve, reject) => {
            DrugBatchModal.remove({_id:id}).then(()=>{
                resolve({status: 200, message: "Successfullt deleted the batch"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
}

module.exports = new DrugBatchController();





