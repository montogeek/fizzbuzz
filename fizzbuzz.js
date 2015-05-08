var fizz = 'Fizz';
var buzz = 'Buzz';
var fizzbuzz = fizz + buzz;

function module3(number) {
  return number % 3;
}

function module5(number) {
  return number % 5;
}

for(var i = 1; i <=100; i++) {
  if(module3(i) === 0 && module5(i) === 0) {
    console.log(fizzbuzz);
    continue;
  }
  if (module5(i) === 0) {
    console.log(buzz);
    continue;
  }
  if (module3(i) === 0) {
    console.log(fizz);
    continue;
  }
  console.log(i);
}