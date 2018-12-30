/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        substr,
        maxlen = 0,
        map = {};

    // base cases
    if (len < 2) {
        return s;
    }
    

    for (var i = 0; i < len; i++) {
        // although this condition prevents extra processing a smaller substrings that are less than maxlength.
        // But, this solution is not optimal because it processes substrings again and again instead of storing them.
        // TODO DP
        for (var j = len; j > i && (j - i > maxlen); j--) {
            if (j != i) {
                substr = s.substring(i, j);
                //console.log(substr, '   ', i, j);
                if (isPlaindrome(substr)) {
                    //console.log('found palindrome here..', substr);
                    if (substr.length > maxlen) {
                        maxlen = substr.length;
                        map[maxlen] = substr;
                    }
                }
            }
        }
        //console.log('------------------------------')
    }
    
    return  map[maxlen];
};

function isPlaindrome(str) {
    for (var i = 0, len = str.length / 2, j = str.length - 1; i < len; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}