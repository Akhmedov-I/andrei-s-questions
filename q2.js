let arr = [5, 8, 7, 6, 5, 10];
let tar = 20


const findNumSum = (arr, tar) => {
	let counter = [];
	let counter1 = [];
	let m = 0;
	let answer = [];
	let answer1 = []
	arr.forEach((x, i) => {
		arr.forEach((y, n) => {
			counter.push(x)
			if ((x + y) === tar && !counter.includes(y)) {
				answer[m] = `Answer ${m+1}: when you sum ${x} and ${y} you can get ${tar}`
				m++
				counter.push(y)
			}
		})
		arr.forEach((y, n) => {
			if ((x + y) === tar && !counter1.includes(y) && !counter1.includes(x)) {
				answer1[m] = `Answer ${m+1}: when you sum ${x} and ${y} you can get ${tar}`
				m++
				counter1.push(x, y)
			}
		})

	})
	if (answer.length === 0 && answer1.length !==0 ) {
		answer = `Sorry, the is no way to get ${tar} from given numbers without duplication`
	} else if (answer.length === 0 && answer1.length === 0) {
		answer = `Sorry, the is no way to get ${tar} with sum of two numbers from given array`
	}
return answer
}