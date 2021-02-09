const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users';
xhr.open('get', url);
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);
        } else {
            console.log(xhr.status);
        }
    }
};
xhr.send();

// ====================== Function ======================

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                response = JSON.parse(xhr.response);
                callback(null, response);
            } else {
                callback(xmr.status, null);
            }
        }
    }
    xhr.send();
}
getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        res.forEach(user => {
            console.log(user.name);
        });
    }
});
getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        res.forEach(post => {
            console.log(post.title);
        });
    }
});
getRequest('https://jsonplaceholder.typicode.com/posts/1/comments', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        res.forEach(com => {
            console.log(com.email);
        });
    }
});

// ====================== As Map ======================

let arr = [1, 2, 3, 4, 5];
// let result = arr.map(elemt => elemt * elemt);
// console.log(result);
function asmap(arr, cb) {
    return arr.map(v => {
        setTimeout(cb.bind(null, v), 0);
        // setTimeout(() => cb(v), 0);
    });
}
result = asmap(arr, v => {
    console.log(v);
});
console.log(result);