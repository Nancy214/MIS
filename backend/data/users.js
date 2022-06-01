import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "42.108.196.8",
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "43.108.197.7"
  },
  {
    name: 'Kevin Smith',
    email: 'kevin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    ip: "43.107.199.6"
  },
]

export default users