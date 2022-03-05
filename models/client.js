import mongoose from "mongoose";

const Schema = mongoose.Schema

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
})

const Client = mongoose.model('Client', clientSchema)

export {
  Client, 
}