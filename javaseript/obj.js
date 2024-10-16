// let user={name="dhanun",age=30};
// let clone={};
// for(let key in user)
// {
//     cloner[key]=user[key];

// }

// let clone=Object.assign({},user);
// alert(user.name);
// alert(user.age);



// let car={brand:"xyz",model:"abc",year:2014}
// console.log(car.brand);
// car.prize="1000";
// delete car.brand;
// console.log(car);


// let book={title:"1984",author:"abc"};
// function hasProperty(obj,prop)
// {
//     return prop in obj;
// }
// console.log(hasProperty(book))


// let student={name:"jhone",ade:21,grade:"a"};
// for(let key in student)
// {
//     console.log('$'(student[key]));
// }


// let calculator={num1:10,num2:5,
//     add()
//     {
//         return this.num1+this.num2;
//     },
//     sub()
//     {
//         return this.num1-this.num2;
//     }
  
// }
// console.log(calculator.add());
//     console.log(calculator.sub());


// let user={name:"dhanun",age:2};
// function cloneObject(obj)
// {
//     let clone={};
//     for (let key in obj)
//     {
//         clone[key]=obj[key];

//     }
//     return clone;

// }
// let userClone=cloneObject(user);
// console.log(userClone);

// let m={...user,...userClone}
// console.log(m);





// function sum(a,b,c)
// {
//     return a+b+c

// }
// console.log(sum(1,2,3))

// function sum1(...args)
// {
//     let sum=0;
//     for (let arg of args)
//     {
//         sum+=arg
//     }
//     return sum
// }


// console.log(sum(1,2,3))

// let arr=[1,2,3];
// let arrCopy=[...arr];
// console.log(arrCopy);

//javaScript Schedulinh Methods=setTimeout and setInterval
// java Script provides two methods to schedule funcation execution after a delay
//synatax
// let timerId=setInterval((func.delay,arg1,arg2....))

// let obj={a:1,b:2,c:3};
// let objCopy={...obj};




// function sayHi()
// {
//     console.log("Hello ")
// }
// setTimeout(sayHi(),10000);


// function hello()
// {
//     let variable="hello"
// }
// console.log(variable)

//a closure is afeature in js where are inner funcation has access to the outrer (enclosing) funcation 

// function outerfunction()
// {
//     let counter=0
//     function innerfuncation()
//     {
//         counter+=1
//         return counter
//     } 
//     return innerfuncation
// }
// let increment=outerfunction()
// console.log(increment())
// console.log(increment())
// console.log(increment())

//prototypal inheritance allows object in js in inherit properties and method from other object
//_proto_ used to set an object prototype




// let animal={
//     eats:"yes i eats"

// };
// let rabbit={
//     jumps:true
// };
// rabbit._proto_=animal;
// console.log(rabbit.eats)
//we are assgin rabbit protptype to animals now we can access animals propites using rabbit

// let animal={
//     eats:"Yes I Eat",
//     walk(){
//         console.log("yes animal walks ")
//     }
    
// };
// let bigEar={
//     earheight:21,
//     _proto_:rabit

// }
// let rabit={
//     jumps:true,
//     _proto_:animal
// };


// bigEar.walk()
// console.log(rabit.eats)
// console.log(bigEar.jumps)
// //prototype chanining is used to build new types of object based on existing ones
// function outerFunction() {
//     let counter = 0; // Local variable in outerFunction
  
//     function innerFunction() {
//       counter++; // Accessing and modifying the outerFunction variable
//       return counter;
//     }
  
//     return innerFunction;
//   }
  
//   const incrementCounter = outerFunction(); // incrementCounter is now the innerFunction with access to counter
  
//   console.log(incrementCounter()); // 1
//   console.log(incrementCounter()); // 2
//   console.log(incrementCounter()); // 3
  

//   //ex-1
//   function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  
//   //ex-2
//   function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12
  
//   //ex-3
//   function foo() {
//     let b = 1;
//     function inner() {
//         return b;
//     }
//     return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());

// //ex-5
// function foo(outer_arg) {

//     function inner(inner_arg) {
//         return outer_arg + inner_arg;
//     }
//     return inner;
// }
// let get_func_inner1 = foo(5);

// console.log(get_func_inner1(4));
// console.log(get_func_inner1(3));

class car{
  constructor(brand,model){
      this.brand=brand;
      this.model=model;

  }
  method1(){
      console.log("method 1");
  }
   method2(){
      console.log("drive");
  }

}
const ob =new car("sss","gbfdfs");
  ob.method2();
  
  
  class electriccar extends car{
      constructor(brand,model,batterycapacity){
      // this.brand=brand;
     // this.model=model;
       super(brand,model)
      this.batterycapacity=batterycapacity;
      }
      charge(){
           console.log("charging...");
      }
      
  }
  const cc=new electriccar("toyota","s class","full charge");
    cc.charge();


