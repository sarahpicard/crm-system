import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoSchema = new Schema ({
  content: String,
})

const Todo = mongoose.model('Todo', todoSchema)

export {
  Todo,
}