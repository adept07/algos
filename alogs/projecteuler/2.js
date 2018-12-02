
var series = [],
	sum = 0,
	prev1 = 0,
	prev2 = 1,
	sum,
	termMax = 4000000;  

for (var i = 2;; i++) {
	currentNumber = prev1 + prev2
	prev1 = prev2;
	prev2 = currentNumber
	series.push(currentNumber);
	if (currentNumber < termMax) {
		if (currentNumber % 2 === 0) {
			sum += currentNumber; 	
		}
		
	} else {
		console.log(sum);
		return sum;
	}
}
