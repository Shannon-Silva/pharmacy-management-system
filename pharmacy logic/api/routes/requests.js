const router = require('express').Router();
const requestController = require('../controllers/requestController');

router.post('/', (req, res, next)=>{
    requestController.addRequest(req.body)
    .then((newRequest)=>{
        res.send(newRequest);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
    requestController.DeleteARequest(req.params.id)
    .then((newRequest)=>{
        res.send(newRequest);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    requestController.GetAllRequests()
    .then((newRequest)=>{
        res.send(newRequest);
    }).catch(next);
});


module.exports = router;