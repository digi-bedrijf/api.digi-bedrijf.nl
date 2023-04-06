import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
  invoiceCount: { type: Number },
})

const Account = mongoose.model('Account', accountSchema)

export default Account
