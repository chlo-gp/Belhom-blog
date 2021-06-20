const dao = require("../articles/articles.DAO")

// Create and Save a new Article
exports.create = (req, res) => {
   dao.create(req, res);
};

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
   dao.findAll(req, res);
};

// Find a single Article with an id
exports.findOne = (req, res) => {
   dao.findOne(req, res);
};

// Update a Article by the id in the request
exports.update = (req, res) => {
   dao.update(req, res);
};

exports.delete = (req, res) => {
   dao.delete(req, res);
}
exports.deleteAll = (req, res) => {
   dao.deleteAll(req, res);
}