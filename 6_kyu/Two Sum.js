/*------- Two Sum----------------------------------------------------
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple /
list (depending on your language) like so: (index1, index2).*/

function twoSum(numbers, target) {
  const idxArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        idxArr[0] = i;
        idxArr[1] = j;

        return idxArr;
      }
    }
  }

}

console.log(`II Two Sum
    INPUT: [1,2,3], 4
           [1234,5678,9012], 14690
    OUTPUT: ${twoSum([1, 2, 3], 4)}
            ${twoSum([1234, 5678, 9012], 14690)}`
);
