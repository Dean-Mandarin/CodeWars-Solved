/*Simple Interest and Compound Interest
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p)
and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period
to the amount owed, then calculating the next interest payment based on the principal
PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n,
return an array [ total owed under simple interest, total owed under compound interest ]

Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]*/


function interest(P, r, n) {
  const result = [];
  result[0] = P + P * r * n;
  result[1] = Number((P * Math.pow(1 + r, n)).toFixed(0));

  return result;
}

console.log(`IX Count the divisors of a number
    INPUT: 100,0.1,1
           100,0.1,10
    OUTPUT: ${interest(100, 0.1, 1)}
            ${interest(100, 0.1, 10)}`
);