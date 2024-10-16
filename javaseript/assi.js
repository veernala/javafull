// //ex:-1 setTimeout
// function sayHi() {
//     alert('dhanunjaya rao');
//    }
 
//  setTimeout(sayHi, 10000); 
//  //ex:-2
//  function greet(phrase, name) {
//    alert(${phrase}, ${name});
//  }
 
//  setTimeout(dhanunjayarao, 10000, "how are u", "dhanunjaya"); // how are u", "dhanunjaya after 1 second
 
// // ex:3 
// function Hi(a,b){
//    alert(${a},${b});
// }  
// setTimeout(Hi,1000,"Hey","Mr");

// //nested setTimeout
// let timer = setTimeout(function tick() {
//    alert('Tick');
//    timer = setTimeout(tick, 2000); // Schedules the next call after 2 seconds
//  }, 2000);

//  //zero delay
//  setTimeout(() => alert("World"));
// alert("Hello");  // "Hello" appears first, then "World"


// //cancelling setTimeout
// let timerId = setInterval(() => alert('Tick'), 1000);
// clearInterval(timerId);  // Cancels the repeated execution



//ex:1-setIntrval

let timerId = setInterval(() => alert('Tick'), 2000); // Alerts every 2 seconds
setTimeout(() => clearInterval(timerId), 5000); // Stops after 5 seconds

//ex:2-setIntrval
let student = setInterval(() => alert('Hi'),3000);
setTimeout(() => clearInterval(student),5000);


//ex:-3 
// program to stop the setInterval() method after five times

// let count = 0;

// // function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 2000);





/*function sumAll(...args) { // args is an array of all arguments
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  console.log(sumAll(1)); // 1
  console.log(sumAll(1, 2)); // 3
  console.log(sumAll(1, 2, 3)); // 6 */

  //mix of regular and rest parameters

  /* function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // "Julius Caesar"
    alert(titles[0]); // "Consul"
    alert(titles.length); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");*/
  
  // //ex-1
  // function myFun(a, b, ...manyMoreArgs) {
  //   console.log("a", a);
  //   console.log("b", b);
  //   console.log("manyMoreArgs", manyMoreArgs);
  // }
  
  // myFun("one", "two", "three", "four", "five", "six");
  
  // // Console Output:
  // // a, one
  // // b, two
  // // manyMoreArgs, ["three", "four", "five", "six"]

  // //ex-2
  // function sortRestArgs(...theArgs) {
  //   const sortedArgs = theArgs.sort();
  //   return sortedArgs;
  // }
  
  // console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

  // //ex-3
  // function multiply(multiplier, ...theArgs) {
  //   return theArgs.map((element) => multiplier * element);
  // }
  
  // const arr = multiply(2, 15, 25, 42);
  // console.log(arr); // [30, 50, 84]


  let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5

//multiple array
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

//merging

let arr4 = [3, 5, 1];
let arr3 = [8, 9, 15];

let merged = [ ...4, ...arr3];
console.log(merged); // [3, 5, 1, 8, 9, 15]

//conveting strings to arrays
let str = "Hello";
console.log([...str]); // ["H", "e", "l", "l", "o"]

//copying
let arr5 = [1, 2, 3];
let arrCopy = [...arr5];
console.log(arrCopy); // [1, 2, 3]
arr5.push(4);
console.log(arr5); // [1, 2, 3, 4]
console.log(arrCopy); // [1, 2, 3]

//object
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
console.log(objCopy); // { a: 1, b: 2, c: 3 }
obj.d = 4;
console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
console.log(objCopy); // { a: 1, b: 2, c: 3 }

//ex-1
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }

//ex-2
let arr10 = [0, 1, 2];
const arr20 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]

//ex-3
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //ex-4
  const user1 = {
    name: 'Jen',
    age: 22,
};

const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const merge = { ...user1, ...user2 };
console.log(merge);

//ex-5
const Str = "hello world";
const Array = [...Str];

console.log(Array); // Output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']