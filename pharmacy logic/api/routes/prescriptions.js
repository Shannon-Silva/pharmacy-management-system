const router = require('express').Router();
const prescriptionController = require('../controllers/prescriptionController');

router.post('/', (req, res, next) => {
    prescriptionController.addPrescription(req.body)
        .then((newPrescription) => {
            res.send(newPrescription);
        }).catch(next);
});

router.post('/dispense', (req, res, next) => {
    prescriptionController.dispense(req.body)
        .then((message) => {
            res.send({status: 200, message: message});
        }).catch(next);
});

router.get('/', (req, res, next) => {
    if (req.query.patientID) {
        prescriptionController.getPrescriptionsByPatientID(req.query.patientID)
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    } else if (req.query.patientName) {
        prescriptionController.getPrescriptionsByName(req.query.patientName)
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    } else if (req.query.undispensed) {
        prescriptionController.getPrescriptions(true)
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    } else {
        prescriptionController.getPrescriptions()
            .then((prescriptions) => {
                res.send(prescriptions);
            }).catch(next);
    }
});

module.exports = router;