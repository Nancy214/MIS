import bcrypt from 'bcryptjs'

const users = [
  {
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "42.108.196.8",
    isAdmin: true,
  },
  {
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "43.108.197.7"
  },
  {
    email: 'kevin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "43.107.199.6"
  },
]

export default users