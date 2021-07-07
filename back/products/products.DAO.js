const db = require("../config/models");
const Products = db.products;
const {Op} = require("sequelize");

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    } else if (!req.body.category) {
        res.status(400).send({
            message: "Category can not be empty!"
        });
        return;
    } else if (!req.body.brand) {
        res.status(400).send({
            message: "Brand can not be empty!"
        });
        return;
    } else if (!req.body.price) {
        res.status(400).send({
            message: "Price can not be empty!"
        });
        return;
    }

    // Create a Product
    const product = {
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        desc: req.body.desc,
        thumbnail: req.body.thumbnail,
    };

    // Save Product in the database
    Products.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {

    Products.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

// Find a single product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Products.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving product with id=" + id
            });
        });
};

// Update a product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Products.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating product with id=" + id
            });
        });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Products.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete product with id=" + id
            });
        });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    Products.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Products were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all products."
            });
        });
};