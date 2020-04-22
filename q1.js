let array = [1,"2",4,591,392,391,2,5,10,2,1,"1",1,20,"20"]

 const arrayFunc = (arr) => {
 	let answerArray = [];
 	let counterNum = [];
 	let counterSt = [];
	let numericArraySorted = [];
	let stringArraySorted = [];

 	arr.sort((a, b) => a - b);

 	const numericArray = (arr.filter(x=> typeof x === 'number'));


 	const stringArray = (arr.filter(x=> typeof x === 'string'));

 	numericArray.forEach(x => {
 		if (numericArray.filter((a) => a === x).length > 1 && !counterNum.includes(x)) {
 			numericArraySorted.push([numericArray.filter((d) => d === x)]);
 			counterNum.push(x);
 		} else if (!counterNum.includes(x)) {
 			numericArraySorted.push(x);
 			counterNum.push(x)
 		}
 	})

 	stringArray.forEach(y => {
 		if (stringArray.filter(b => b === y).length > 1 && !counterSt.includes(y)) {
 			stringArraySorted.push([stringArray.filter((c) => c === y)])
 			counterSt.push(y)
 		} else if (!counterSt.includes(y)) {
 			stringArraySorted.push(y)
 			counterSt.push(y)
 		}
 	})

 	answerArray = [numericArraySorted].concat([stringArraySorted])

 return answerArray 
}