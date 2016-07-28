/*Problem: using the console output something that looks like this
a
ab
abc
abcd
abcde
abcde f
etc etc*/

// create an array that will hold a - z
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayLength = alpha.length;

// create a for loop to loop over the array
for (var i = 0; i < arrayLength; i++) {
    // each time through the string is recreated or you could empty the string
    var alphaString = "";
    for(var j = 0; j <= i; j++) {
        alphaString += alpha[j];
        // add 1 to j so the first time though it doesnt add a space
        if((j + 1)%5 === 0) {
            alphaString += " ";
        }
    }
    // output to the console
    console.log(alphaString)
}




