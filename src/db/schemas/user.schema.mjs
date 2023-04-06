import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  secret: { type: String, select: false },
  active: { type: Boolean, default: fasle },
  locked: { type: Boolean, default: fasle },
  activated: { type: Date },
  created: { type: Date, default: new Date() },
  incorrect: { type: Number, default: 0, max: 3 },
})

const User = mongoose.model('User', userSchema)

export default User
