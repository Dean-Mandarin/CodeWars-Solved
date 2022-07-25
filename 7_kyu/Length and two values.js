/*Length and two values
Given a number n and two values firstValue and secondValue, build
an array of size n filled with firstValue and secondValue alternating.

for input:                 5, true, false
expected result would be: [true, false, true, false, true]*/

function alternate(n, firstValue, secondValue) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    (i % 2 == 0) ? arr[i] = firstValue : arr[i] = secondValue;
  }

  return arr;
}

console.log(`II Length and two values 
	INPUT: 20, 'blue', 'red'-->
	OUTPUT: ${alternate(20, 'blue', 'red')}`
);
