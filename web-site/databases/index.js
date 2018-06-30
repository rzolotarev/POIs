const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://localhost:27017/test';

exports.initialize = () => {
    mongoose.connect(DATABASE_CONNECTION);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, "connection error: We might not be as connceted as I thought"));
    db.on('open', () => console.log('We are connected you and I'));        
}

var options = { discriminatorKey: 'type' };

var poiSchema = mongoose.Schema({    
    lattidute : {
        type: Number,
        require: true
    },
    longitude: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, options);

PoiModel = exports.PoiModel = mongoose.model('POI', poiSchema);

var restaurantSchema = mongoose.Schema({
    rate: {
        type: Number,        
    },
    
    chef: {
        type: String,        
    }
}, options);

RestaurantModel = exports.RestaurantModel = PoiModel.discriminator('Restaurant', restaurantSchema);


var cinemaSchema = mongoose.Schema({
    date : {
        type: Date,        
        default: Date.now()
    },
    
    Films: {
        type: String        
    }
}, options);

CinemaModel = exports.CinemaModel = PoiModel.discriminator('Cinema', cinemaSchema);