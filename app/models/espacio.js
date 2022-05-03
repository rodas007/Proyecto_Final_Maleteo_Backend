const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EspacioSchema = new mongoose.Schema(
  {
    imagen: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    alias: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    localization: {
      type: String,
      required: false
    },
    property: {
      type: String,
      required: false
    },
    space: {
      type: String,
      required: false
    },
    locker: {
      type: String,
      required: false
    },
    availability: {
      type: String,
      required: false
    },
    services: {
      type: String,
      required: false
    },
    discount: {
      type: String,
      required: false
    },
    latitud: {
      type: String,
      required: false
    },
    longitud: {
      type: String,
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
EspacioSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('espacio', EspacioSchema)
