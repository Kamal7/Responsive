// array.push(item1, item2, ..., itemX)

// array.push(totatArray, .........., item1, item2, item3);
//                                      |      |      |
//                                     [0]    [1]    [2]    insert last index 


var animals = ['pigs', 'goats', 'sheep'];
var count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);


//Array.prototype.push
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);


// push.call
var obj = {
    length: 0,
    addElem: function addElem(elem) {
        [].push.call(this, elem);
    }
}
obj.addElem({});
obj.addElem({});
console.log(obj.length);