let comments = require("../comments");

module.exports.list =  function list(request, response) {
    return response.json(comments);
}
module.exports.show =  function show(request, response) {
    let foundComment = comments.find( (comment) => comment._id == request.params.id );
    return response.json(foundComment);
}
module.exports.create =  function create(request, response) {
    request.body._id = comments.length + 1;
    comments.push(request.body);
    return response.json(comments);
}
module.exports.update =  function update(request, response) {
    let updateComment = comments.find((comment)=> comment._id == request.params.id);
    updateComment.superPowered = false;
    return response.json(comments);
}
module.exports.remove =  function remove(request, response) {
    let deleteComment = comments.find((comment)=> comment._id == request.params.id);
    deleteComment.isActive = false;
    return response.json(comments);
}
   