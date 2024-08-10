import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from "uuid"
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({phone, password, name}) => new Promise(async(resolve, reject) => {
    try {
        // Trả về mảng 2 phần tử: 
        // [0] là item được tạo mới hoặc tìm thấy
        // [1] là true => create, [1] là false => find
        const response = await db.User.findOne({
            where: { phone },
            defaults: {
                phone, 
                name,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, {expiresIn: '2d'})
        resolve({
            err: token ? 0 : 2,
            mes: token ? 'Register is successfully !' : 'Phone number has been already used !',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})

export const loginService = ({phone, password}) => new Promise(async(resolve, reject) => {
    try {
        // findOne trả về instance => để loại bỏ chỉ trả về object data thì thêm raw: true
        // findOne trả về data khi tìm thấy, nếu không thì trả về null
        const response = await db.User.findOne({
            where: { phone },
            raw: true
        })
        // Tìm thấy sdt thì phải check thêm password, ngược lại thì không cần check password
        const isCorrectPassword =  response && bcrypt.compareSync(password, response.password);
        // Khi sdt và password trùng thì mới tạo token
        const token = isCorrectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, {expiresIn: '2d'})
        resolve({
            err: token ? 0 : 2,
            mes: token ? 'Login is successfully !' : response ? 'Password is wrong' : 'Phone number not found !',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})