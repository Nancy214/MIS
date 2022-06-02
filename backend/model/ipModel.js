import mongoose from 'mongoose'

const ipSchema = mongoose.Schema(
  {
   
    ip: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
)

const Ip = mongoose.model('Ip', ipSchema)

export default Ip
