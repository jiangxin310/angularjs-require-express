/**
 * Created by toshiba on 15/12/20.
 */

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var _User = new Schema({
    email: String,
    name: String,
    password: String,
    avatar: String
});


//为_User添加实例方法
_User.methods.findById = function(name, callback) {
    //这里的this.model 参数为注册model时的名字
    return this.model('User').find({name: name}, callback);
}


// //为_User添加静态方法，静态方法在Model层就能使用
_User.statics.findByName= function(name, callback) {
    return this.model('User').find({name: name}, callback);
}


var User = mongoose.model('User', _User);


exports.User = User;
