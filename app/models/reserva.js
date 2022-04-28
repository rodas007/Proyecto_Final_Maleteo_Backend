const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CitySchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true
    },
    useremail: {
      type: String,
      required: false
    },
    guardianemail: {
      type: String,
      required: false
    },
    spacetitle: {
      type: String,
      required: false
    },
    deliver: {
      type: String,
      required: false
    },
    removal: {
      type: String,
      required: false
    },
    pieces: {
      type: String,
      required: false
    },
    code: {
      type: String,
      required: false
    },
    price: {
      type: String,
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
CitySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('reserva', CitySchema)
