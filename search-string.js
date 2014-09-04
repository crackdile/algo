function main() {
    var start = new Date();
    var testString = "ROVyLqojrrmGVJRJGukd olfdsbJ0mM9OEr6GebSR drrCMyJHME6gsyqL8XRe OnsF45C51uTaNJiQ38uK jkijg7dUP1ck9o2JtIsc Avu339q8OWj1yjyNgtKK CAYsUicdthWGKN3KkUaI BkKwSe5COrpVK1mwLnnA 1OYvSD3T85pwbBthwH3l L1CQoFeoTxVhIgW7QLbhashasheb";
    var index = search(testString, "ashe");
    console.log(index);

    var end = new Date();

    console.log("Took: %dms", end - start);
}

function search(str, substr) {
    var index = -1;

    var i = 0,
	strLen = str.length,
	// Sub string
	j = 0,
	subLen = substr.length;

    while (i < strLen) {
	if (str[i] != substr[j]) {
	    j = 0;
	}
	if (str[i] == substr[j]) {
	    if (j == 0) {
		index = i;
	    }
	    
	    j ++;
	}

	if (j == subLen) {
	    return index;
	}

	i ++;
    }

    return -1;
}


main();
