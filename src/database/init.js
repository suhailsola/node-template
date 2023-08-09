import { PostgresConnection } from "./connection";
import User from "./model/User";

const syncModels = async () => {
  await PostgresConnection.authenticate();
//   await User.sync({ alter: true });
};

const dbInit = async () => {
  try {
    console.debug("Connecting to the database");
    await syncModels();
    console.debug("Connected to the database");
  } catch (error) {
    console.error(`Errpr: Failed to connect to the database. ${error}`);
    process.exit(1);
  }
};

export default dbInit;
