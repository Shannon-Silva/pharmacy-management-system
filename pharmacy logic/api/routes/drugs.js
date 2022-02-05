const router = require('express').Router();
const drugController = require('../controllers/drugController');

router.post('/', (req, res, next)=>{
    drugController.addDrug(req.body)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.post('/:id', (req, res, next)=>{
    drugController.UpdateDrug(req.params.id,req.body)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
    drugController.DeleteADrug(req.params.id)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    drugController.GetAllDrugs()
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});

router.get('/:id', (req, res, next)=>{
    drugController.findADrug(req.params.id)
    .then((newDrug)=>{
        res.send(newDrug);
    }).catch(next);
});



module.exports = router;