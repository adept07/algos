/**
 * 
 */
var sample1 = [[5, 10], [20, 30], [40, 50]];
var sample2 = [[5, 10], [20, 30], [25, 50]];

function hasConflict(inputArray) {
	let lowerBound,
		upperBound,
		subArray;
	
	for (let index = 0, arrSize = inputArray.length; index < arrSize; index++) {
		subArray = inputArray[index];
		if (subArray[0] < upperBound) {
			return true;
		}
		
		lowerBound = subArray[0];
		upperBound = subArray[1];
	}

	return false;
}
