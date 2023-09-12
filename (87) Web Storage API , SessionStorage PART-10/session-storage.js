// localStorage vs sessonStorage
// 10mb vs 5mb
// permanent vs session (tab)

//  sessionStorage.setItem("user1", "Shams");
//  sessionStorage.setItem("user2", "Mim");


// // const userName = sessionStorage.getItem("user");
// // console.log(userName);

// //sessionStorage.removeItem("user")
//  sessionStorage.clear();

//..................NEXT............PART..............

const user = {id : "110", name : "Shams"};
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);



