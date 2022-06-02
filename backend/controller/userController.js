import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import Ip from '../model/ipModel.js'
import generateToken from '../utils/generateToken.js'


const authUser = asyncHandler(async (req, res) => {
  const { email, password, ip } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      ip: user.ip,
      isAdmin: user.isAdmin,
      lastLogin: user.lastLogin ? user.lastLogin : new Date(),
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})



export {
  authUser
 
  
}
