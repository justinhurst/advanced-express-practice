let CommentModel = require("../models/CommentModel");

module.exports.list =  function list(request, response) {
    CommentModel.find({}).exec().then(comments => {
        return response.json(comments);
    })
}
module.exports.show =  function show(request, response) {
    CommentModel.findById(request.params.id).exec()
        .then(c => {
            return response.json(c)
        });
}
module.exports.create =  function create(request, response) {
    let comment = new CommentModel( request.body );
    comment.save();
    return response.json(comment);
}
module.exports.update =  function update(request, response) {
    CommentModel.findById(request.params.id).exec().then(c => {
        c.updated = true;
        c.save();
        return response.json(c)
    });
}
module.exports.remove =  function remove(request, response) {
    CommentModel.findById(request.params.id).exec().then(c => {
        c.active = false;
        c.save();
        return response.json(c)
    });
}
   