function main() {
    var testString1 = "ROVyLqojrrmGVJRJGukd olfdsbJ0mM9OEr6GebSR drrCMyJHME6gsyqL8XRe OnsF45C51uTaNJiQ38uK jkijg7dUP1ck9o2JtIsc Avu339q8OWj1yjyNgtKK CAYsUicdthWGKN3KkUaI BkKwSe5COrpVK1mwLnnA 1OYvSD3T85pwbBthwH3l L1CQoFeoTxVhIgW7QLbhashasheb";
    var testString2 = "anita lava la tina";
    var testString3 = "se van sus naves";
    var testString4 = "alli por la tropa portado traido a ese paraje de maniobras una tipa como capitan usar boina me dejara pese a odiar toda tropa por tal ropilla";


    console.log(isPalindrome(testString1));
    console.log(isPalindrome(testString2));
    console.log(isPalindrome(testString3));
    console.log(isPalindrome(testString4));
}


function isPalindrome(str) {
    var i = 0, j = str.length - 1;
    var is = true;

    while (i <= j) {
	if (str[i] == " ") {
	    i++; continue;
	}
	if (str[j] == " ") {
	    j--; continue;
	}
	
	if (str[i] != str[j]) {
	    return false;
	}
	i ++;
	j --;
    }

    return true;
}



main();
