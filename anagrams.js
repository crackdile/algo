function main() {
    var testString1 = "algo";
    var testString2 = "loga";

    console.log(areAnagrams(testString1, testString2));
    console.log(areAnagrams("no", "son"));
    console.log(areAnagrams("no", "on"));
}

function areAnagrams(string1, string2) {
    var ascii = [];
    var i, len, code;

    for (i = 0; i < 256; i++) {
	ascii[i] = 0;
    }

    for (i = 0, len = string1.length; i < len; i++) {
	code = string1.charCodeAt(i);
	ascii[code] += 1;
    }

    for (i = 0, len = string2.length; i < len; i++) {
	code = string2.charCodeAt(i);
	ascii[code] -= 1;
    }

    for (i = 0; i < 256; i++) {
	if (ascii[i] != 0) {
	    return false;
	}
    }

    return true;
}

main();
