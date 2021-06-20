const dao = require("../articles/articles.DAO")

// Create and Save a new Article
exports.create = (req, res) => {
   dao.create;
 };

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
   dao.findAll;
 };

// Find a single Article with an id
exports.findOne = (req, res) => {
   dao.findOne;
 };

// Update a Article by the id in the request
exports.update = (req, res) => {
   dao.update;
 };

exports.delete = ()=> {
   dao.delete;
}
exports.deleteAll = () => {
   dao.deleteAll;
}