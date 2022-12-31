const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://eze:123@cluster0.9ttzyjl.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DataBase...."))
  .catch((err) => console.log(err));
