//the "async" keyword is used to define an asynchronous funcation .when a funcation is declared with "async" it automatically returns a Promisme
//if the funcation returns a value that value is wrapped in a promise .if the funcation throws an error if rejected Promise

//await
//the "await" keyword can only be used inside "async" funcation it makes js waot until the Promise is settled is settled before continuoing
// to execute the code while waiting other can run which helps the application responsive

//syntax3
// async function myAsyncFunction()
// {
//     const result=await someAsyncOperation();
//     console.log(result)
// }

// 
// console.log("stat")
// setTimeout(()=>{
//     console.log("t1")
// },0)


//the event loop in js in a fundamental concept  that handles asynchronous operations and ensure non-blocking in the language .since ja is single-
//threaded meaning it can only execute one task at a time  in main thread the event loop is ctucial for manafing tasks like network requct 
//files reading or timers without freezing the execution of othet code


//call stack
//this is where in js
