const mongoose = require("mongoose");

async function dbconnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://shopsRUs:v5rjypDWNSLfk04J@cluster0.ecyvm.mongodb.net/shoprus?retryWrites=true&w=majority`
    );

    console.log("Connected to the database");
  } catch (error) {
    dbconnect();
  }
}

dbconnect();
