let VehicleModel = require("../models/VehicleModel");

module.exports.list =  function list(request, response) {
    VehicleModel.find({}).exec().then(vehicles => {
        return response.json(vehicles);
    })
}
module.exports.show =  function show(request, response) {
    VehicleModel.findById(request.params.id).exec()
        .then(u => {
            return response.json(u)
        });
}
module.exports.create =  function create(request, response) {
    let vehicle = new VehicleModel( request.body );
    vehicle.save();
    return response.json(vehicle);
}
module.exports.update =  function update(request, response) {
    VehicleModel.findById(request.params.id).exec()
        .then(v => {
            v.mileage = 1337;
            v.save();
            return response.json(v)
        });
}
module.exports.remove =  function remove(request, response) {
    VehicleModel.findById(request.params.id).exec()
        .then(v => {
            v.active = false;
            v.save();
            return response.json(v)
        });
}