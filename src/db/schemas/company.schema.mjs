import mongoose from 'mongoose'

const companyType = [
  'eenmanszaak',
  'vennootschap',
  'maatschap',
  'commanditaire',
  'besloten vennootschap',
  'naamloze vennootschap',
  'coöperatie',
  'vereniging',
  'stichting',
]

const companySchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String, enum: companyType },
  brand: { type: String },
  kvk: { type: Number },
  vat: { type: Number },
  payroll: { type: Number },
  corporation: { type: Number },
  corporation: { type: Number },
  iban: { type: String },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
})

const Company = mongoose.model('Company', companySchema)

export default Company
