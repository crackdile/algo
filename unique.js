function main() {
    var testArray = makeRandomArray(1000000);

    var start = new Date();
    unique1(testArray);
    var end = new Date();
    console.log("Took: %dms", end - start);

    start = new Date();
    unique2(testArray);
    end = new Date();
    console.log("Took: %dms", end - start);
}

function makeRandomArray(len) {
    var arr = [];
    
    for (var i = 0; i < len; i ++) {
	arr.push(Math.floor(Math.random() * 300));
    }

    return arr;
}

function unique1(input) {
    input.sort(function (a, b) {
	return a - b;
    });
    
    var output = [], current = null;
    for (var i = 0, len = input.length; i < len; i ++) {
	var item = input[i];
	if (item != current) {
	    output.push(item);
	    current = item;
	}
    }

    return output;
}

function unique2(input) {
    input.sort(function (a, b) {
	return a - b;
    });
    var last = null;
    var i = 0, len = input.length;
    
    //for (var i = 0, len = input.length; i < input.length; i++) {
    while (i < len) {
	var item = input[i];
	if (item == last) {
	    input.splice(i, 1);
	    len = input.length;
	} else {
	    last = item;
	    i ++;
	}
	
	
    }
    
    return input;
}

main();

