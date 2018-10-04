/**
 * 
 */
function fizzbuzz(range) {
	var arr = [];
	if (range) {
		for (var i = 1; i <= range; i++ ) {
			if (i % 3 == 0 && i % 5 == 0) {
				arr.push('fizzbuzz');
				continue;
			}
			if (i % 3 == 0) {
				arr.push('fizz');
				continue;
			}
			if (i % 5 == 0) {
				arr.push('buzz');
				continue;
			}
			arr.push(i);
		}
	}
	console.log(arr);
}

fizzbuzz(10);


