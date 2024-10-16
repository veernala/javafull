// const promise =new promise((reslove.reject)=>
// {
//     if(success)
//     {
//         reslove(value)
//     }
//     else{
//         reject(error)
//     }
// });



// const promise=new Promise((res,rej)=>{
//     setTimeout(()=>
//         {
//             console.log("tjis is resloved in 3sec")
//         },3000)
// });

// promise.then(mess=>console.log(mess)).catch(error=>console.log(error+"fail"))


//advance promise method
//Promsie.all()
//Promise.all()//waits for allpromises resolve if any promise is rejected,the entire promise.all()is rejected with that error.

//2.Promise.allSettled()
//Promise.allSettled() waits for all promisees to settle meaning they either fulfill or reject it returns an array desscribing the outcome of each promise


//3.Promise.any()
//Promise.any() retuns the result of the first fulfilled promise .if all promises are rejected it retuns an Agggrerate error


//4.Promise.Race()
//Promise.Race() retuns the result of the  setteled promises


const promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("first")
    },1000)
});
    const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("second")
    },2000)
});
    const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("third")
    },3000)
});

//promise1.all(mess=>console.log(mess)).catch(error=>console.log(error+"fail"))
//promise2.all(mess=>console.log(mess)).catch(error=>console.log(error+"fail"))
//promise3.all(mess=>console.log(mess)).catch(error=>console.log(error+"fail"))


Promise.allSettled([promise1,promise2,promise3]).then(results=>console.log(results))
.catch(error=>console.log(error))
