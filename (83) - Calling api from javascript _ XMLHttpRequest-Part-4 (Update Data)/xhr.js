console.clear;

// Event :- Onload(); onerror();
// property :- response, responseText, responseType, responseUrl, status, statusText
// Function :- open(), send(), sendRequestHeader()

const makeRequest = (method, url, data) => {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("error is here");
    }
    xhr.send(JSON.stringify(data));

}

const getData = () => {    
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');    
}

const sendData = () => {    
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });    //
}

const updateData = () => {    
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooMa',
        body: 'barMA',
        userId: 1,
    });    
}
updateData();