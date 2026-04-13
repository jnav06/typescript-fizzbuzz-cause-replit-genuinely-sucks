
function returnFizzBuzz(n: number): string {

    if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
    else if (n % 3 === 0) return "fizz";
    else if (n % 5 === 0) return "buzz";

    else return n.toString();

}

function fizzBuzz() { // i just don't get why yall wanted me to do 2 different functions for this. i wrote it in like one just fine

  for (let i = 1; i <= 100; i++) {
    console.log(returnFizzBuzz(i));
  }

}

fizzBuzz();