/*String ends with?
Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(`VI String ends with?
    INPUT: 'abcde', 'cde'
    OUTPUT: ${solution('abcde', 'cde')}
    
    INPUT: 'abcde', 'abc'
    OUTPUT: ${solution('abcde', 'abc')}`
);