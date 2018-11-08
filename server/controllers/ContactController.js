let contacts = require("../contacts");

module.exports.list =  function list(request, response) {
    return response.json(contacts);
}
module.exports.show =  function show(request, response) {
    let foundContact = contacts.find( (contact) => contact._id == request.params.id );
    return response.json(foundContact);
}
module.exports.create =  function create(request, response) {
    request.body._id = contacts.length + 1;
    contacts.push(request.body);
    return response.json(contacts);
}
module.exports.update =  function update(request, response) {
    let updateContact = contacts.find((contact)=> contact._id == request.params.id);
    updateContact.superPowered = false;
    return response.json(contacts);
}
module.exports.remove =  function remove(request, response) {
    let deleteContact = contacts.find((contact)=> contact._id == request.params.id);
    deleteContact.isActive = false;
    return response.json(contacts);
}
   