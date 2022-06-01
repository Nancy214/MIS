import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'


const authUser = asyncHandler(async (req, res) => {
  const { email, password, ip } = req.body
  const user = await User.findOne({ email })
  var messsage = ""

  if (user && (await user.matchPassword(password))) {
    if(user.ip !== ip){
      messsage = "Logged in through new device"
    }
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      ip: user.ip,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      messsage: messsage
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


export {
  authUser
  
}
