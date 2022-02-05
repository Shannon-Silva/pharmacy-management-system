const assert = require('assert');
const Prescription = require('../api/models/Prescription');

describe('Prescription test suite', function(){

    var newPrescription;

    it('Should save a prescription to the database', function(done){
        newPrescription = new Prescription(
            {

                "prescriptionItems": [
                    {
                        "drug": "Ampicillin",
                        "dosage": 2,
                        "price": 200,
                        "frequency": "b.d",
                        "duration": "10 days",
                        "quantity": 20
                    },
                    {
            
                        "drug": "Enalapril",
                        "dosage": 1,
                        "price": 30,
                        "frequency": "b.d",
                        "duration": "30 days",
                        "quantity": 30
                    }
                ],
                "patientID": 999,
                "patientName": "Test Patient"
            }
        )

        newPrescription.save().then(function(){
            assert(newPrescription.isNew === false);
            done();
        })

    }) // end of it

    it('Should find a prescription in the database', function(done){

        Prescription.findOne({patientName: "Test Patient"}).then((result)=>{
            assert(result !== null)
            done();
        })

    }) // end of it

    it('Should find a prescription by ID in the database', function(done){

        Prescription.findOne({_id: newPrescription._id}).then((result)=>{
            assert(result !== null)
            done();
        })

    }) // end of it

    it('Should delete a prescription in the database', function(done){

        Prescription.findOneAndRemove({patientName: "Test Patient"}).then(()=>{
            Prescription.findOne({patientName: "Test Patient"}).then((result)=>{
                assert(result === null)
                done();
            })
        })

    }) // end of it
})