const dbConfig = require("./config");
const Sequelize = require("sequelize");

let sequelize;
if (process.env.JAWSDB_URL) {
  // for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  const env = process.env.NODE_ENV || "development";
  //const config = path.resolve(__dirname, "..", "config", "config.json")[env];
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
}


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("../articles/articles.model")(sequelize, Sequelize);
db.products = require("../products/products.model")(sequelize, Sequelize);

module.exports = db;