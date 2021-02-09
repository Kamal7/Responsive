let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One');
});
let p2 = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'Two');
});
p1.then((v) => {
    console.log(v);
});
p2.then((v) => {
    console.log(v);
});
p1.catch((e) => {
    console.log(e);
});
p2.catch((e) => {
    console.log(e);
});

// ==================== Function ====================
function getPromise(isTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTrue) {
                resolve('I have been resolve...')
            } else {
                reject('I have been rejected..');
            }
        }, 2000);
    });
}
getPromise(true)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })