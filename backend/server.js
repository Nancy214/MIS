import express from 'express'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import connectDB from './config/db.js'
import userRoute from './route/userRoute.js'
import Employee from './model/employeeModel.js'

dotenv.config()
connectDB()
const io = new Server({
    cors:{
        origin: "http://localhost:3000"
    }
})
const app = express()

app.use(express.json())


const addEmployee = async(user, socketId) => {
    const userExists = await Employee.findOne({ "user.ip": user.ip })
    //console.log(userExists)
  if (!userExists) {
    
      const employees = await Employee.create({user, socketId})

  }
}

const getEmployee = async() => {
    const admin =  await Employee.findOne({"user.isAdmin": true})
    return admin
    
}

const getLoginInfo = async(user) => {
    const loginInfo = await Employee.findOne(user.lastLogin)
    //console.log(loginInfo)
    if(loginInfo){
        return loginInfo
    }else{
        return 
    }
}



io.on("connection", (socket)=>{
    socket.on("newEmployee", (user)=>{
        addEmployee(user, socket.id)
        

    })

    socket.on("sendNotification", async(user)=>{
        const admin = await getEmployee()
        //console.log(admin.socketId)
        io.to(admin.socketId).emit("getNotification", {
            user: user
        })
        
    })
    socket.on("sendLoginInfo", async(user)=>{
        const admin = await getEmployee()
        const lastLogin = await getLoginInfo(user)
        //console.log(user)
        console.log(lastLogin)
        if(lastLogin){

            io.to(admin.socketId).emit("getLoginInfo", {
                user: user
            })
        }
        
    })

    socket.on("disconnect", ()=>{
       
    })
})

io.listen(5001)


app.use('/api/users', userRoute)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server running on port 5000'))
