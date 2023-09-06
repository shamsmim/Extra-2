// 4 way to call api--XMLHttpRequest fetch, axios, jquery
// fetch() - global method for making Http-Request
// 2 way to call fetch - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch returns a promise
// - returned promise can only handel network error
// - dose not support all the older browser

// Async & Await

const makeRequest = async (url) => {
    const res = await fetch(url);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message); 
    }

const data = await res.json();
return data;
};
 
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};

getData();
