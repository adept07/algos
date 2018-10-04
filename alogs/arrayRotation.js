var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var rotationNum = 3;

function rotateArray(array, rotationNum) {
	var arraySize = array.length,
		arrayLastIndex = arraySize - 1;

	
	for (var i = 0; i < rotationNum; i++) {
		var temp = array[0];
		
		for (var j = 0; j < arraySize; j++) {
			if (j == arrayLastIndex) {
				 array[j] = temp;
		
			} else {
				array[j] = array[j + 1];
			}
		}
	}
	
	console.log(array);
}

rotateArray(array, rotationNum);