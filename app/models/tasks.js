const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Tasks", TaskSchema);
