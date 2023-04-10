'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = queryInterface.createTable('blog_posts', {
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
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
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
    queryInterface.dropTable('blog_posts');
  }
};
