const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    loginId: {
        type: String,   //类型是字符串
        required: true,  //是否为必填
        trim: true, //自动去掉首位空格
        minlength: 6,   //最小长度
        maxlength: 18,  //最大长度
        index: true,     //将这个字段设置为索引
        unique: true    //特殊索引，唯一索引
    },
    loginPwd: {
        type: String,   //类型是字符串
        required: true,  //是否为必填
        trim: true, //自动去掉首位空格
        minlength: 6,   //最小长度
        maxlength: 18,  //最大长度
        select: false   //默认情况下查询，不会返回该字段
    },
    name: {
        type: String,   //类型是字符串
        required: true,  //是否为必填
        trim: true, //自动去掉首位空格
        minlength: 2,   //最小长度
        maxlength: 10,  //最大长度
    },
    loves: {
        type: [String],
        required: true,
        default: [],    //默认值为一个空数组
    },
    age: {
        type: Number,
        default: 18,
        required: true
    },
    address: {
        type: {
            province: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            }
        },
        required: true
    }
})
module.exports = mongoose.model("User", userSchema);