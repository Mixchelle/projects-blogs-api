'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = queryInterface.createTable('users', {
      id:                        
      {
        allowNull: false,         
        autoIncrement: true,      
        primaryKey: true,         
        type: Sequelize.INTEGER, 
      },
      display_name:
      {
        type: Sequelize.STRING,  
      },
      email:
        {
          allowNull: false,
          type: Sequelize.STRING,
        },
      password:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return Users
  },
 
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};
