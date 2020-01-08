//1 Install lodash and save it in package.json
const lodash=require('lodash');
//2.Create an array of objects {name: “”, age: “”}
const  myArray=[
    {name: 'Zeynep', age: 33},
    {name: 'samet', age: 33},
    {name: 'Burak', age: 34},
    {name: 'Neva', age: 3},
    {name: 'Yunus', age: 24}
];
// 3.Sort the array in a descending order based on the age. lodash
console.log(lodash.orderBy(myArray, ['age'], ['desc']));
// 4.Find a the oldest and youngest people in the array. lodash
console.log(lodash.minBy(myArray, 'age'));
console.log(lodash.maxBy(myArray, 'age'));
// 5. Remove the oldest person from the array. lodash
const maxAge=lodash.maxBy(myArray, 'age');
lodash.remove(myArray, maxAge)
// 6. Add some objects to the array with the same age but different names.
lodash.extend(myArray, [{'name':'veli', 'age':33}]);
// 7. Group the people by age.
lodash.groupBy(myArray, 'age');
// 8. Create file named people.txt
const fs=require('fs');
//move everyting and push new value
fs.writeFile('target.txt', 'homework is almost done', (err) =>{
    if (err){
        console.log('hello from error:', err);
        return;
    }
    console.log('file saved');
});
// 9. (Challenge) Iterate through the array and add an entry to the file with every person in the array in the form: name is age
const addEntry=lodash.map(myArray, function(arr){
        return `${arr.name} is ${arr.age}`;
    });
fs.writeFile('target.txt', addEntry, (err) =>{
    if (err){
        console.log('hello from error:', err);
        return;
    }
        console.log('file saved');
});



