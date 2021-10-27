require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_URL ||
        "mongodb://newer:8CVP1LDgQ9fhzLAp@cluster0-shard-00-00.ujqwp.mongodb.net:27017,cluster0-shard-00-01.ujqwp.mongodb.net:27017,cluster0-shard-00-02.ujqwp.mongodb.net:27017/ASD_Resturant_review?ssl=true&replicaSet=atlas-lkgkla-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        // must add in order to not get any error masseges:
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`mongo database is connected!!! ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error: ${error} `);
    process.exit(1); // passing 1 - will exit the proccess with error
  }
};

connectDB();
// export default connectDB;
