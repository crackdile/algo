function main() {
    console.log(hasDuplicateChars("anaconda"));
    console.log(hasDuplicateChars("great"));
}

function hasDuplicateChars(text) {
    var ascii = [];
    var i, len = text.length, code;
    for (i = 0; i < 255; i ++) {
	ascii[i] = false;
    }
    
    for (i = 0; i < len; i++) {
	code = text.charCodeAt(i);
	
	if (ascii[code]) {
	    return true;
	}
	
	ascii[code] = true;
    }
	
    return false;
}


main();
