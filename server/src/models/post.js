"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // post với image là quan hệ 1:1. Vì hình ấy chỉ dùng cho post này thì belongTo cho bảng foreign key  và hasOne cho bảng primary key
      Post.belongsTo(models.Image, { foreignKey: "imagesId", targetKey: "id", as: "images" });
      Post.belongsTo(models.Attribute, { foreignKey: "attributesId", targetKey: "id", as: "attributes" });
      // Mối quan hệ post và user là 1:nhiều => 1 user viết n bài post và 1 post viết 1 user belongsTo: Post, hasMany: User
      Post.belongsTo(models.User, { foreignKey: "userId", targetKey: "id", as: "user" });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      star: DataTypes.STRING,
      labelCode: DataTypes.STRING,
      address: DataTypes.STRING,
      attributesId: DataTypes.STRING,
      categoryCode: DataTypes.STRING,
      priceCode: DataTypes.STRING,
      areaCode: DataTypes.STRING,
      provinceCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.STRING,
      overviewId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
