const dao = require("../products/products.DAO")

exports.create = (req, res) => {
    dao.create;
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    dao.findAll;
};

// Find a single product with an id
exports.findOne = (req, res) => {
    dao.findOne;
};

// Update a product by the id in the request
exports.update = (req, res) => {
    dao.update;
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    dao.delete;
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    dao.deleteAll;
};