const mongoose = require("mongoose");
const operationSchema = new operationSchema({
    operation: {
        type: String,
        enum: ['登录', '注册', '阅读文章']
    },
    time: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    extraInfo: {
        type: mongoose.Schema.Types.Mixed,
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
module.exports = mongoose.model("Operation", operationSchema, 'operation');