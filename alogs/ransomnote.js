/**
 * for leetcode
 */

var canConstruct = function(ransomNote, magazine) {
    
    var mmap = {};
    
    for (var i = 0, mlen = magazine.length; i < mlen; i++) {
        var ch = magazine.charAt(i);
        if (mmap[ch] != undefined) {
            mmap[ch] = mmap[ch] + 1
        } else {
            mmap[ch] = 1
        }
        
    }
    
    for (var j = 0, rlen = ransomNote.length; j < rlen; j++) {
        var ch = ransomNote.charAt(j);
        if (mmap[ch] === undefined || mmap[ch] === 0) {
            return false;
        } else {
            mmap[ch] = mmap[ch] - 1;
        }
        
    }
    
    return true;
    
};

/**
 * Solution for HackerRank question
 */
function checkMagazine(magazine, ransomNote) {
    
    
    var mmap = {};
    
    for (var i = 0, mlen = magazine.length; i < mlen; i++) {
        var ch = magazine[i];
        if (mmap[ch] != undefined) {
            mmap[ch] = mmap[ch] + 1
        } else {
            mmap[ch] = 1
        }
        
    }
    
    for (var j = 0, rlen = ransomNote.length; j < rlen; j++) {
        var ch = ransomNote[j];
        if (mmap[ch] === undefined || mmap[ch] === 0) {
            console.log('No');
            return 'No';
        } else {
            mmap[ch] = mmap[ch] - 1;
        }
        
    }
    
    console.log('Yes');
    return 'Yes';

}
