import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema(
  {
    socketId: {
      type: String,
      required: true,
    },
    user:{
        email: {
        type: String,
        required: true,
      },
      ip: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
      lastLogin:{
        type: Date,
        required: true
      }
    }
    
  },
  {
    timestamps: true,
  }
)

const Employee = mongoose.model('Employee', employeeSchema)

export default Employee
