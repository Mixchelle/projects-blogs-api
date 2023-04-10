'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = queryInterface.createTable('BlogPosts', {
      id:                         
      {
        allowNull: false,         
        autoIncrement: true,    
        primaryKey: true,        
        type: Sequelize.INTEGER,  
      },
      title:
      {
        allowNull: false,
        type: Sequelize.STRING,  
      },
      content:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId:                
      {
        type: Sequelize.INTEGER,  
        allowNull: false,         
        onUpdate: 'CASCADE',      
        onDelete: 'CASCADE',              
        references: {             
          model: 'Users',         
          key: 'id',           
        }
      },
      published: {
        allowNull: false,  
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,  
        type: Sequelize.DATE,
      }
    });
    return BlogPosts
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('BlogPosts');
  }
};
