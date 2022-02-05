const router = require('express').Router();
const drugController = require('../controllers/drugBatchController');

router.post('/', (req, res, next)=>{
    drugController.addDrugBatch(req.body)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.post('/:id', (req, res, next)=>{
    drugController.UpdateDrugbatch(req.params.id,req.body)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
    drugController.DeleteABatch(req.params.id)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    drugController.GetAllDrugsbatch()
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.get('/:id', (req, res, next)=>{
    drugController.findABatch(req.params.id)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});



module.exports = router;