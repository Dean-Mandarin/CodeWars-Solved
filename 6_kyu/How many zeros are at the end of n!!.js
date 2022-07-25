/*--------------How many zeros are at the end of n!!
Define n!! as
n!! = 1 * 3 * 5 * ... * n if n is odd,
n!! = 2 * 4 * 6 * ... * n if n is even.
Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
For a positive integer n, please count how many zeros are there at the end of n!!.

Example:
count_zeros_n_double_fact(30) should return 3
*/

function countZeros(n) {
  let product = 1;
  let start;
  (n % 2 === 0) ? start = 2 : start = 1;

  for (let i = start; i <= n; i += 2) {
    product *= i;
  }

  let arr = String(product).split('');
  let cntZero = 0;

  //ищем с конца и останавливаем как только элемент не равен 0
  //для тернарного оператора нельзя использовать break
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      cntZero++;
    } else break;
  }

  return cntZero;
}

console.log(`IX Count the divisors of a number
    INPUT: 8
           30
    OUTPUT: ${countZeros(8)}
            ${countZeros(30)}`
);