var arrays = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
arrays.sort();
console.log(arrays);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

var items = [{
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic',
        value: 13
    },
    {
        name: 'Zeros',
        value: 37
    }
];

// sort by value
items.sort(function (a, b) {
    return a.value - b.value;
});
console.log(items);