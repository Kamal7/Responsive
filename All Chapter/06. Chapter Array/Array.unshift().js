// array.unshift(item1, item2, ..., itemX)

// array.unshift(item1, item2, ..., totatArray)
//                 |      |             |-> Total array data...
//                [0]    [1]  insert frist index 



var array1 = [1, 2, 3];
console.log(array1.unshift(4));
console.log(array1.unshift(4, 5));
console.log(array1);