import { Sequelize } from "sequelize";
import config from "../../config";

const { database, user, password, host, port } = config.postgres;

export const PostgresConnection = new Sequelize(database, user, password, {
  host: host,
  dialect: "postgres",
});
