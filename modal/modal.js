const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    item:{type:String , required: true}
},{timestamps:true})

const Todo = mongoose.model("Todos" , TodoSchema);
module.exports = Todo