const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://eze:123@cluster0.9ttzyjl.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB