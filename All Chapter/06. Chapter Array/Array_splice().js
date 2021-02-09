//               - 5 - 4 - 3 - 2 - 1
//                |   |   |   |   |
// var array  = [16, 17, 18, 19, 20];
//               |   |   |   |   |
//              0   1   2   3    4


// var arrDeletedItems = array.splice(start[], deleteCount[], item1[], item2[]);
// Array.splice(index, remove_count, item_list)


//                 |->which index insert data
//                |
// Array.splice(index, remove_count, item1, item2, item3)
//                          |          |      |      |-> insert list data
//                          |->which index remove data



var arrays = [1, 2, 3, 4, 5];
console.log(arrays.splice(2)); // shows [3, 4, 5], returned removed item(s) as a new array object
console.log(arrays); // shows [1, 2], original array altered.


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months);
months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months);