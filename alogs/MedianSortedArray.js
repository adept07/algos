/**
 * Brute force way
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var mergedArray = nums1.concat(nums2),
        sortedArray = mySort(mergedArray),
        len = sortedArray.length,
        median,
        m1, m2, temp;

    if (len === 1) {
        return sortedArray[0];
    }
    
    // even
    if (len % 2 === 0) {
        temp = Math.floor(len / 2);
        m1 = temp - 1;
        m2 = temp;
        median = (sortedArray[m1] + sortedArray[m2]) / 2;
    } else {
        // odd case
        m1 = Math.floor(len / 2);
        median = sortedArray[m1];
    }
    
    return median;
};

var mySort = function(arr) {
    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    
    return sortedArr;
}