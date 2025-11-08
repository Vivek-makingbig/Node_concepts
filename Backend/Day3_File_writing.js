// Synchronous
// const fs = require('fs');
// const data =fs.writeFileSync('Write.txt','This is a new text file created by using writeFile funtion of the fs module');
// console.log('Successfully written in file');


// Asynchronous 

const fs = require('fs');
fs.writeFile('Write2.txt','This is the asynchronous method of writing in a file',(err)=>{
    if (err) throw err
    console.log("Writing in file successful");
})