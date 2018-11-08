let products = require("../products");

module.exports.list =  function list(request, response) {
    return response.json(products);
}
module.exports.show =  function show(request, response) {
    let foundProduct = products.find( (product) => product._id == request.params.id );
    return response.json(foundProduct);
}
module.exports.create =  function create(request, response) {
    request.body._id = products.length + 1;
    products.push(request.body);
    return response.json(products);
}
module.exports.update =  function update(request, response) {
    let updateProducts = products.find((product)=> product._id == request.params.id);
    updateVehicle.superPowered = false;
    return response.json(products);
}
module.exports.remove =  function remove(request, response) {
    let deleteProducts = products.find((product)=> product._id == request.params.id);
    deleteProduct.isActive = false;
    return response.json(products);
}
   