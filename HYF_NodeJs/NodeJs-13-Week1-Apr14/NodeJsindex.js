// const number=10;
// const number_2=20;
// let result= number+number_2;
// console.log(result);

// const {pay, order:importedOrder} = require('./utils.js');


// const myOrder=importedOrder();
// const myBill=pay(myOrder);
// console.log(myBill);

// const fs=require('fs');

// fs.readFile('target.txt', (err, data)=>{
//     if (err){
//         console.log('hello from error:', err);
//         return;

//     }
//     //converting stream data to string and log
//     console.log(data.toString());
// });

// console.log('after reading file');

//writing something to file
const fs=require('fs');
//move everyting and push new value
fs.writeFile('target.txt', 'hello Hyf', (err) =>{
    if (err){
        console.log('hello from error:', err);
        return;

    }
    console.log('file saved');
});



