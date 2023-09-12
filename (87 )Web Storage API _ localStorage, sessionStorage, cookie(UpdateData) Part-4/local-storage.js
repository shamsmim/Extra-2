// web-storage API - allows us to store & read data in browser
// web storage API - localstorage, sessionStorage

//localStorage - store, read, update and remove data
// no expiry data: data never gets lost even if you close the browser


//..........getItem......................

const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);

//..........getItem......................

//..........updateItem......................

localStorage.setItem("userName", "Shams Rahman");
 localStorage.setItem("password", "123456789");

//..........updateItem......................
