'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        },
        allowNull: false,
      }
  });
    return PostsCategories
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('posts_categories');
  }
};

