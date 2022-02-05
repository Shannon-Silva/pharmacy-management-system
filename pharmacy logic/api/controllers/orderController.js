const OrderModal = require('../models/Orders');

var OrderController = function () {
    this.addOrder = (data) => {
        return new Promise((resolve, reject) => {
            var order = new OrderModal({
                orderID: data.orderID,
                from: data.from,
                to:data.to,
                subject : data.subject,
                content:data.content,
             
            });
            order.save().then(() => {
                resolve({ status: 200, message: "Succesfully added new order" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        });
    }
    
    this.GetAllOrders = () => {
        return new Promise((resolve, reject) => {
            OrderModal.find({}).exec().then((orders) => {
                resolve({ status: 200, data: orders });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        })
    }

   
    this.DeleteAOrder = (id) => {
        return new Promise((resolve, reject) => {
            OrderModal.remove({ _id: id }).then(() => {
                resolve({ status: 200, message: "Successfullt deleted the order" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            });
        });
    }
}

module.exports = new OrderController();





