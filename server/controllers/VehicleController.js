//let vehicles = require("../vehicles");
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
    /*let updateVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);
    updateVehicle.superPowered = false;
    return response.json(vehicles);*/
    VehicleModel.findById(request.params.id).exec()
        .then(v => {
            v.mileage = 1337;
            v.save();
            return response.json(v)
        });
}
module.exports.remove =  function remove(request, response) {
    /*let deleteVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);
    deleteVehicle.isActive = false;
    return response.json(vehicles);*/
    VehicleModel.findById(request.params.id).exec()
        .then(v => {
            v.active = false;
            v.save();
            console.log(v.active,v);
            return response.json(v)
        });
}