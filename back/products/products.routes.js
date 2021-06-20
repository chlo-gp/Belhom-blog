module.exports = app => {
    const products = require("../products/products.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Article
    router.post("/", products.create);
  
    // Retrieve all Articles
    router.get("/", products.findAll);
  
    // Retrieve a single Article with id
    router.get("/:id", products.findOne);
  
    // Update a Article with id
    router.put("/:id", products.update);
  
    // Delete a Article with id
    router.delete("/:id", products.delete);
  
    // Delete all Articles
    router.delete("/", products.deleteAll);
  
    app.use('/products', router);
  };