import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'

import User from './model/userModel.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

importData()