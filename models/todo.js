import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoSchema = new Schema ({
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
})

const Todo = mongoose.model('Todo', todoSchema)

export {
  Todo,
}