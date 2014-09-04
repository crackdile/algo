function main() {
    var testArray = makeRandomArray(10000000);
    testArray.sort(function (a, b) {
	return a - b;
    });

    var start = new Date();
    var b = binary_search(testArray, 3);
    var end = new Date();
    var j = testArray.indexOf(3);
    
    console.log(b);
    console.log("Took %dms", end - start);
    console.log(j);

}

function binary_search(arr, needle, min, max) {
    if (typeof min === "undefined") {
	min = 0;
    }
    if (typeof max === "undefined") {
	max = arr.length;
    }
    
    if (min > max) {
	return -1;
    }

    var middle = Math.floor((min + max) / 2);

    if (arr[middle] > needle) {
	return binary_search(arr, needle, min, middle - 1);
    } else if (arr[middle] < needle) {
	return binary_search(arr, needle, middle + 1, max);
    } else {
	return middle;
    }
}

function makeRandomArray(len) {
    var arr = [];
    
    for (var i = 0; i < len; i ++) {
	arr.push(Math.floor(Math.random() * 1000));
    }

    return arr;
}

main();
