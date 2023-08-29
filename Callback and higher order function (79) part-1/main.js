// Synchronous Function

const taskOne = (callback) => {
    console.log("Task1");
    callback();
}

// const dataLoading = () =>{
//     console.log("Task2 .dataLoading");
// }

const taskTwo = (callback) => {
    setTimeout(() =>{
        console.log("Task2 .dataLoading");
        callback();
    }, 2000);
    
}

const taskThree = (callback) => {
    console.log("Task3");
    callback();
}

const taskFour = (callback) => {
    console.log("Task4");
    callback();
}

const taskFive = () => {
    console.log("Task5");
    ;
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            })
        });
    });
});
