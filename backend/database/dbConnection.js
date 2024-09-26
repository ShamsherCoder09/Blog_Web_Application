import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config({ path: "./config/config.env" });


console.log(process.env.MONGO_URI)

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_BLOGGING_APP",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
