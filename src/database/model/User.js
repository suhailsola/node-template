import { DataTypes } from "sequelize";
import { PostgresConnection } from "../connection";

const User = PostgresConnection.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    paranoid: true,
    timestamps: true,
  }
);

export default User;
