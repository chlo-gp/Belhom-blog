const service = require("./products.service")
// Create and Save a new Product
exports.create = (req, res) => {
  service.create(req, res);
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  service.findAll(req, res);
};

// Find a single product with an id
exports.findOne = (req, res) => {
  service.findOne(req, res);
};

// Update a product by the id in the request
exports.update = (req, res) => {
  service.update(req, res);
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  service.delete(req, res);
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  service.deleteAll(req, res);
};