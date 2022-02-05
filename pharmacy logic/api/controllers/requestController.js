const RequestModal = require('../models/Requests');

var RequestController = function () {
    this.addRequest = (data) => {
        return new Promise((resolve, reject) => {
            var request = new RequestModal({
                requestID: data.requestID,
                drugName:data.drugName,
                requestedQuantity:data.requestedQuantity,
                availableQuantity:data.availableQuantity,
                department : data.department,
                date:data.date
                 });
            request.save().then(() => {
                resolve({ status: 200, message: "Succesfully added new request" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        });
    }

    this.GetAllRequests = () => {
        return new Promise((resolve, reject) => {
            RequestModal.find({}).exec().then((requests) => {
                resolve({ status: 200, data: requests });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        })
    }

   
    this.DeleteARequest = (id) => {
        return new Promise((resolve, reject) => {
            RequestModal.remove({ _id: id }).then(() => {
                resolve({ status: 200, message: "Successfullt deleted the request" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            });
        });
    }
}

module.exports = new RequestController();





