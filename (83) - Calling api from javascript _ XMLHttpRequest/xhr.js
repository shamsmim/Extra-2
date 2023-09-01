console.clear;

// Event :- Onload(); onerror();
// property :- response, responseText, responseType, responseUrl, status, statusText
// Function :- open(), send(), sendRequestHeader()

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.send();
}
getData();