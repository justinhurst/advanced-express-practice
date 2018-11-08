let ContactModel = require("../models/ContactModel");

module.exports.list =  function list(request, response) {
    ContactModel.find({}).exec().then(contacts => {
        return response.json(contacts);
    })
}
module.exports.show =  function show(request, response) {
    ContactModel.findById(request.params.id).exec().then(c => {
            return response.json(c)
        });
}
module.exports.create =  function create(request, response) {
    let contact = new ContactModel( request.body );
    contact.save();
    return response.json(contact);
}
module.exports.update =  function update(request, response) {
    ContactModel.findById(request.params.id).exec().then(c => {
        c.updated = true;
        c.save();
        return response.json(c)
    });
}
module.exports.remove =  function remove(request, response) {
    ContactModel.findById(request.params.id).exec().then(c => {
        c.active = false;
        c.save();
        return response.json(c)
    });
}
   