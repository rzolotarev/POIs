const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://localhost:27017/test';

var kitySchema = mongoose.Schema({
    name: String
});

Kitten = exports.Kitten = mongoose.model('Kitten', kitySchema);

exports.initializeMongo = function() {
    mongoose.connect(DATABASE_CONNECTION);

    console.log('Trying to connect to: ' + DATABASE_CONNECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, "connection error: We might not be as connceted as I thought"));
    db.on('open', () => console.log('We are connectied you and I'));
    addRandomCat();
};

var addRandomCat = () => {
    var silence = new Kitten({
        name: 'silence ' +  Math.random()
    });

    silence.save((err, fluffy) => {
        if(err) return console.error(err);
        console.log('There is a new random cat in the neighborhood');            
    });
};