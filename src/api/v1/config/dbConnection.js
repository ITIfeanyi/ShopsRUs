const mongoose = require("mongoose");

async function dbconnect() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log("Connected to the database");
  } catch (error) {
    throw new Error(error.message);
  }
}

dbconnect();
