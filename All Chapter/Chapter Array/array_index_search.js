var array_list = ['pigs', 'goats', 'sheep', 'chickens', 'cats', 'dogs'];
var find = 'sheeps';
var isFound = false;
for (var i = 0; i < array_list.length; i++) {

    // if (array_list[i] === find) {
    //     console.log('Data found index', i);
    //     isFound = true;
    //     break;
    // } else {
    //     console.log('Data not founds...');
    // }


    if (array_list[i] === find) {
        console.log('Data found index', i);
        isFound = true;
        break;
    }


}
if (!isFound) {
    console.log('Data not founds...');
}