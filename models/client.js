import mongoose from "mongoose";

const Schema = mongoose.Schema

const conversationSchema = new Schema ({
  date: Date, 
  info: String, 
}, {
  timestamps: true
})

const clientSchema = new Schema ({
  name: String, 
  occupation: String, 
  phone: Number, 
  email: String, 
  address: String, 
  notes: String, 
  linkedinurl: String, 
  status: Boolean, 
  source: String, 
  contacted: Boolean, 
  conversations: [{conversationSchema}],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
})

const Client = mongoose.model('Client', clientSchema)

export {
  Client, 
}