const fs = require('fs');

fs.readFile('data.txt',(err,data)=> {
    if(err){
        console.log("err"+err);
    }
    const res = data.toString().split(" ").length;
    console.log(res);
});