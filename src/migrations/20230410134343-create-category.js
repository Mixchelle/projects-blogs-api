'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Categories = queryInterface.createTable('categories', {
      id:                         
      {
        allowNull: false,         
        autoIncrement: true,      
        primaryKey: true,         
        type: Sequelize.INTEGER,  
      },
      name:
      {
        allowNull: false,
        type: Sequelize.STRING,   
      },
    });
    return Categories
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('categories');
  }
};