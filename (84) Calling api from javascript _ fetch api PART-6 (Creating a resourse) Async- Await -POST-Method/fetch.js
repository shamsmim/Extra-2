// 4 way to call api--XMLHttpRequest fetch, axios, jquery
// fetch() - global method for making Http-Request
// 2 way to call fetch - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch returns a promise
// - returned promise can only handel network error
// - dose not support all the older browser

// Async & Await

const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message); 
    }

const data = await res.json();
return data;
};
 
const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        id: 1,
        body: JSON.stringify({
          title: 'fooMAA',
          body: 'barMAA',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }},)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
updateData();

// const sendData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         }},)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };
// sendData();



// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// };
// getData();
