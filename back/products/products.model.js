module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: Sequelize.STRING(255), allowNull: false,  },
        brand: {type: Sequelize.STRING(255), allowNull: false,  },
        category: {type: Sequelize.STRING(255), allowNull: false,},
        price: {type: Sequelize.INTEGER, allowNull: false,},
        desc: {type: Sequelize.STRING(255), },
        apply: {type: Sequelize.STRING(255), },
        thumbnail: {type: Sequelize.STRING(255),},
    });
  
    return Products;
  };