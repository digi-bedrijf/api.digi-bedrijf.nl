import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  email: { type: String },
  mobile: { type: String },
  phone: { type: String },
  website: { type: String },
  street: { type: String },
  street2: { type: String },
  landmark: { type: String },
  apartment: { type: String },
  city: { type: String },
  province: { type: String },
  country: { type: String },
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
