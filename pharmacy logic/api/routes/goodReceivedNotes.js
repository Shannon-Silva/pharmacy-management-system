const router = require('express').Router();
const goodReceivedNotesController = require('../controllers/goodReceivedNotesController');

router.post('/', (req, res, next)=>{
    goodReceivedNotesController.addGRN(req.body)
    .then((newgoodReceivedNotes)=>{
        res.send(newgoodReceivedNotes);
    }).catch(next);
});

router.get('/', (req, res, next)=>{
    goodReceivedNotesController.GetAllGRN()
    .then((goodReceivedNotes)=>{
        res.send(goodReceivedNotes);
    }).catch(next);
});

router.delete('/:id', (req, res, next)=>{
    goodReceivedNotesController.DeleteAGRN(req.params.id)
    .then((newgoodReceivedNotes)=>{
        res.send(newgoodReceivedNotes);
    }).catch(next);
});

module.exports = router;