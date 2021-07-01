const dao = require("./products.DAO")

exports.create = (req, res) => {
    dao.create(req, res);
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    dao.findAll(req, res);
};

// Find a single product with an id
exports.findOne = (req, res) => {
    dao.findOne(req, res);
};

// Update a product by the id in the request
exports.update = (req, res) => {
    dao.update(req, res);
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    dao.delete(req, res);
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    dao.deleteAll(req, res);
};