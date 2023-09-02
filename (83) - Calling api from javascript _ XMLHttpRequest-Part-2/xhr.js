console.clear;

// Event :- Onload(); onerror();
// property :- response, responseText, responseType, responseUrl, status, statusText
// Function :- open(), send(), sendRequestHeader()

const makeRequest = (method, url) => {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("error is here");
    }
    xhr.send();

}

const getData = () => {
    
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    
}
getData();