const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    action: String
});

module.exports = mongoose.model("ToDoModel", ToDoSchema);
