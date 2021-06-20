const service = require("../products/products.service")
// Create and Save a new Product
exports.create = (req, res) => {
  service.create;
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  service.findAll;
};

// Find a single product with an id
exports.findOne = (req, res) => {
  service.findOne;
};

// Update a product by the id in the request
exports.update = (req, res) => {
  service.update;
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  service.delete;
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  service.deleteAll;
};