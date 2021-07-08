module.exports = {
   "development": {
     HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "belhom",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
    }
  };