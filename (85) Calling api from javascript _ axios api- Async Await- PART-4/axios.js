

console.clear();

const makeRequest = async (config) => {
    return await axios(config);
};

const updateData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "put",
        data: JSON.stringify({
            id: 1,
            title: "fooMAA",
            body: "barMAA",
            userId: 1,
          }),
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

updateData();

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();

// const createData = () => {
//     makeRequest({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'post',
//         data: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// createData();