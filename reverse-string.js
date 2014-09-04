function main() {
    var testString = "ola ke ase naoth eusantoh eusantoh";

    var reversed = reverseString(testString);

    console.log("Are equal?", reversed == jsReverse(testString));
    
}

function jsReverse(str) {
    return str.split("").reverse().join("");
}

function reverseString(str) {
    if (str.length <= 0) {
	return "";
    }

    return str[str.length -1] + reverseString(str.substring(0, str.length -1));
}

main();
