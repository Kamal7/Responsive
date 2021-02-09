// Method 1
var arr1 = ["ABC", 24, 18000];
var arr2 = ["EFG", 30, 30000];
var arr3 = ["IJK", 28, 41000];
var arr4 = ["EFG", 31, 28000];
var arr5 = ["EFG", 29, 35000];
var salary0 = [arr1, arr2, arr3, arr4, arr5];
console.log(salary0);

// Method 2
var salary = [
    ["ABC", 24, 18000],
    ["EFG", 30, 30000],
    ["IJK", 28, 41000],
    ["EFG", 31, 28000],
];
console.log(salary[0][2]);
console.log(salary[3][2]);


for (var i = 0, l1 = salary.length; i < l1; i++) {
    for (var j = 0, l2 = salary[i].length; j < l2; j++) {
        console.log(salary[i][j]);
    }
}