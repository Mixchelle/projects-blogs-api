module.exports = (sequelize, DataTypes) => {

  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },

    {
      tableName: 'PostCategory',
      underscored: true,
      timestamps: false
    });


  PostCategory.associate = (models) => {

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, { 
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      through: PostCategory,
    });
  };

  return PostCategory;
};