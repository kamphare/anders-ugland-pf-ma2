// question 1
 
let petArray = ['cat', 'cow', 'dog'];
 
// question 2
 
console.log(petArray[1]);
 
// question 3
 
petArray.push('sheep');
 
// question 4
 
console.log(petArray.length);
 
// question 5
 
let catObject = {
  name: 'Tesla',
  colour: 'White',
  age: 7
}
 
// question 6
 
console.log(catObject.age);
 
// question 7
 
let catArray = [
  {
    name: 'Tesla',
    colour: 'White',
    age: 7
  }
];
 
// question 8
 
//for (i = 0; i < catArray.length; i++)
for (i in catArray) {
  console.log(catArray[i])
}
 
// question 9
 
function logToConsole(arg) {
  console.log(arg);
}
 
// question 10
 
logToConsole("donkey");

