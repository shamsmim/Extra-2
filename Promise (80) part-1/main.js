console.log("welcome");

// How to create a promise
const promise1 = new promise((resolve, reject) => {

    let completedPromise = false;
    if (completedPromise) {
        resolve("completed promise 1");
    }else{
        reject("not completed promise 1");
    }
});

promise1.then((res) => {
    console.log(res);
});
promise1.catch((err) =>{
    console.log(err);
})

console.log("end");