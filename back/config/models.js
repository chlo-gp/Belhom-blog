const dbConfig = require("./db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.articles = require("../articles/articles.model")(sequelize, Sequelize);
  db.products = require("../products/products.model")(sequelize, Sequelize);
  
  module.exports = db; 