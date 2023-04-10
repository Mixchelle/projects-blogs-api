'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = queryInterface.createTable('PostsCategories', {
      postId:                     
      {
        type: Sequelize.INTEGER,  
        allowNull: false,         
        onUpdate: 'CASCADE',      
        onDelete: 'CASCADE',      
        primaryKey: true,         
        references: {             
          model: 'BlogPosts',     
          key: 'id',             
      },
    },
      categoryId:                 
      {
        type: Sequelize.INTEGER,  
        allowNull: false,         
        onUpdate: 'CASCADE',      
        onDelete: 'CASCADE',    
        primaryKey: true,       
        defaultValue: 1,          
        references: {             
          model: 'Categories',       
          key: 'id',              
        }
      },
  });
    return PostsCategories
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('PostsCategories');
  }
};
