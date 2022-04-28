const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    text: {
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
module.exports = mongoose.model('novedades', CitySchema)
