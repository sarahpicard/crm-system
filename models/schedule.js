import mongoose from "mongoose";

const Schema = mongoose.Schema

const scheduleSchema = new Schema ({
  title: String,
  date: Date,
  color: String,
  notes: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

export {
  Schedule,
}