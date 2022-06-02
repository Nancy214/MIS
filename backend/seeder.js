import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import ip from './data/ip.js'
import User from './model/userModel.js'
import Ip from './model/ipModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Ip.deleteMany()

    const createdUsers = await User.insertMany(users)
    const createdIp = await Ip.insertMany(ip)
    const adminUser = createdUsers[0]._id

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

importData()