const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/', (req, res, next)=>{
    orderController.addOrder(req.body)
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
   orderController.DeleteAOrder(req.params.id)
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
   orderController.GetAllOrders()
    .then((newOrder)=>{
        res.send(newOrder);
    }).catch(next);
});

module.exports = router;