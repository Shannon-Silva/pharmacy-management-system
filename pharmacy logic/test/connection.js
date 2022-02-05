const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://ants:ants%40123@ds147450.mlab.com:47450/koombiyo-af');
    mongoose.connection.once('open', function(){
        console.log("Connection to db established");
        done();
    }).on('error', function(error){
        console.log(error)
    })
})