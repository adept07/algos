function reverseArray() {
	var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

	var arrayLengthIndex = array.length - 1,
		midIndex = arrayLengthIndex / 2,
		temp,
		i = 0;

	while(i < midIndex) {
		temp = array[i];
		array[i] = array[arrayLengthIndex];
		array[arrayLengthIndex] = temp;
		i++;
		arrayLengthIndex--;
	}

	console.log(array);
}

reverseArray();