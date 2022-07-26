//-----7 You are a square!-------------------------------------------------------------------------------
// Given an integral number, determine if its a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so dont worry about that in dynamic typed languages.
// Examples
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false

const isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) === true;
}
// bsfsldmf;smf;

console.log(isSquare(25));
console.log(isSquare(-1));