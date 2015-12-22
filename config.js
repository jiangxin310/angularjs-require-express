/**
 * Created by sundongzhi on 15/12/22.
 */
module.exports = {
    env:'production',
    mongodb:{
      url:"mongodb://localhost:27017/mydb",
        opts:{
            mongos: true
        }
    },
    database: {
        //host: "127.0.0.1",
        //user: "root",
        //password: "gozapdev",
        //database: "ehaitao",
        //connectionLimit : 1,
        //port: 4300
        //,debug:true
    },
    redis: {
        hostname: "127.0.0.1",
        port: 6379
    }

};

