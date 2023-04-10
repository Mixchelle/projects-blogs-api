'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,  
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'Users',
    timestamps: false,
    underscored: true,
  });

  UserModel.associate = (models) => {
     UserModel.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'posts' });
};

return UserModel;
};