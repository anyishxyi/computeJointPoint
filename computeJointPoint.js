let numbers = [];
let found = false;

function saveNums(num) {
	const newVal = splitNumber(num);
	numbers.push(newVal)
	return newVal;
}

function isExist(num) {
	const newVal = splitNumber(num);
	const res = numbers.find(elt => elt == newVal);
	found = res ? true : false;
	return newVal;
}

function splitNumber(value) {
	const digits = value.toString().split('');
	const realDigits = digits.map(Number);
	return value + realDigits.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function computeJointPoint(val, val1) {
	while (val <= 20000000) {
		val = saveNums(val)
	}
	while (!found) {
		val1 = isExist(val1)
	}
	console.log(val1);
}

computeJointPoint(483, 480)