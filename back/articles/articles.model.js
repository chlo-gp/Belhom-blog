module.exports = (sequelize, Sequelize) => {
    const Articles = sequelize.define("articles", {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        title: {type: Sequelize.STRING(255), allowNull: false, },
        category: {type: Sequelize.STRING(255), allowNull: false,},
        lead: {type: Sequelize.STRING(255), },
        content: {type: Sequelize.TEXT, allowNull: false,},
        desc: {type: Sequelize.STRING(255), allowNull: false,},
        thumbnail: {type: Sequelize.STRING(255), },
    });
  
    return Articles;
  };