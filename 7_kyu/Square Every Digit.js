/*Square Every Digit
In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out,
because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer */


function squareDigits(num) {
  const sqrArr = ('' + num).split('').map(item => Math.pow(item, 2));

  return Number(sqrArr.join(''));
}

console.log(`V Square Every Digit
    INPUT: 3212
    OUTPUT: ${squareDigits(3212)}`
);