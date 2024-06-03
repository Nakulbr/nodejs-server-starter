const mongoose = require("mongoose");

const connectDb = async (connectionUrl) => {
  await mongoose
    .connect(connectionUrl)
    .then(() => {
      console.log("Db connected successful");
    })
    .catch((err) => console.log(`Mongodb connections : ${err}`));
};

module.exports = connectDb;
