const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});

module.exports = model("Tasks", TaskSchema)