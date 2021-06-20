const service = require("../articles/articles.services")

// Create and Save a new Article
exports.create = (req, res) => {
   service.create;
  };

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
  service.findAll;
  };

// Find a single Article with an id
exports.findOne = (req, res) => {
    service.findOne;
  };

// Update a Article by the id in the request
exports.update = (req, res) => {
    service.update;
  };

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
    service.delete;
  };

// Delete all Articles from the database.
exports.deleteAll = () => {
    service.deleteAll;
  };