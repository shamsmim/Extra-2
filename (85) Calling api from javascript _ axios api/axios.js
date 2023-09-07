

console.clear();

axios.get("https://jsonplaceholder.typicode.com/posts/101")
.then((res) => console.log(res.data)) 
//  Error Handeling........
.cathc((err) => console.log(err)) ;
