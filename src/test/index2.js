const User = require("./User.js");
let obj = {
    loginId: 'user1456',
    loginPwd: '12345678',
    name: 'Jiluqi',
    loves: ['test'],
    age: 13,
    address: {
        province: 'abba',
        city: 'Beijing'
    }
}
let u = new User(obj);
u.save((err, result) => {
    console.log(err);
    console.log(result);
})