let color = '255, 255, 255'
const colorConverter = (color) => {
	let rgbToHexDic = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
	let hexColor = [];
	let rgbColor= [];
	let answer = [];
	debugger
	if (color[0] === '#') {
		for (i = 0; i < color.substr(1).length; i += 2){
			hexColor.push(rgbToHexDic.indexOf(color.substr(1)[i])*16 + rgbToHexDic.indexOf(color.substr(1)[i+1]));
		} 
	} else {
		let rgbPrep = color.split(',');
		rgbPrep.map((x, i) => rgbPrep[i] = parseInt(x));
		rgbPrep.forEach((n, i)=> {
		rgbColor.push((`${rgbToHexDic[Math.floor(n/16)]}${rgbToHexDic[n - Math.floor(n/16)*16]}`))
		})
		rgbColor = `(#${rgbColor[0]}${rgbColor[1]}${rgbColor[2]})`
	}
	if (hexColor.length === 0) {
		answer = rgbColor;
	} else {
		answer = hexColor;
	}
return answer
}
