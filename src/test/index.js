const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/test1");
const User = require("./User.js");
mongoose.connection.on('open', () => {
    console.log('链接已经打开');
})
let obj = {
    loginId: 'user1454',
    loginPwd: '12345678',
    name: 'Jiluqi',
    loves: ['test'],
    age: 13,
    address: {
        province: 'abba',
        city: 'Beijing'
    }
}
//第一种添加方式
// let u = new User(obj);
// u.save((err, result) => {
//     console.log(err);
//     console.log(result);
// })
//第二种添加方式
async function test(){
    const result = await User.findById('62fa33b9e90c66d545d0d2ef');
    console.log(result);
}
test();