function fizzBuzz(num) {
  let output = "";
  if (num % 3 === 0 && num % 5 === 0) output += "FizzBuzz";
  else if (num % 3 === 0) output += "Fizz";
  else if (num % 5 === 0) output += "Buzz";
  return output || num;
}

if (require.main === module) {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
  }
}

module.exports = fizzBuzz;
