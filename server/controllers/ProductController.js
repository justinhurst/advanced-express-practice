let ProductModel = require("../models/ProductModel");

module.exports.list =  function list(request, response) {
    ProductModel.find({}).exec().then(products => {
        return response.json(products)
    })
}
module.exports.show =  function show(request, response) {
    ProductModel.findById(request.params.id).exec().then(p => {
        return response.json(p)
    });
}
module.exports.create =  function create(request, response) {
    let product = new ProductModel( request.body );
    product.save();
    return response.json(product);
}
module.exports.update =  function update(request, response) {
    ProductModel.findById(request.params.id).exec().then( p => {
        p.updated = true;
        p.save();
        return response.json(p);
    });
}
module.exports.remove =  function remove(request, response) {
    ProductModel.findById(request.params.id).exec().then( p => {
        p.active = false;
        p.save();
        return response.json(p);
    });
}
   