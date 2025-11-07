//Synchronous way of reading the content of a file
const fs = require('fs');
const data = fs.readFileSync('Mydetails.txt','utf-8');
console.log('The content of the file is :\n');
console.log(data);


//Asynchronous way of reading the content of a file
const fs = require('fs');
 fs.readFile('Mydetails.txt','utf-8',(err,data)=>{
    if (err)  throw err
    console.log(data)
})


