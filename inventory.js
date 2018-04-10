
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    arr1.map((elem1, i1)=> {

        arr2.map((elem2, i2)=> {
            if(elem1[1] === elem2[1]) {
                elem1[0] += elem2[0];
                arr2.splice(i2, 1);
            }
        })
    })

    arr1 = arr1.concat(arr2).sort((a, b)=> {
        a[1] > b[1]
    });

    return arr1;
  
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
