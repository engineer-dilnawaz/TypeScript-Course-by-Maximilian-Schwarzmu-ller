let userName: string; //number, boolean
let userAge = 34;

userName = "Dilnawaz";

// userAge = '32';

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10');
add(10, 5);
// add(10, '4');
