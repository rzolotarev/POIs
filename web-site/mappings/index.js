const database = require('../databases');

module.exports = {
    "Cinema": database.CinemaModel,
    "Restaurant": database.RestaurantModel,
    "Poi": database.PoiModel
};