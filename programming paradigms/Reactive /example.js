

const $increment = document.querySelector('#increment');
const $decrement = document.querySelector('#decrement');
const $double = document.querySelector('#double');
const $halve = document.querySelector('#halve');

let counter = 0;

$increment.addEventListener('click', onIncrement);
$decrement.addEventListener('click', onDecrement);
$double.addEventListener('click', onDouble);
$halve.addEventListener('click', onHalve);

function onIncrement(e) {
  counter += 1;
}
function onDecrement(e) {
  counter -= 1;
}
function onDouble(e) {
  counter *= 2;
}
function onHalve(e) {
  counter /= 2;
}

/*
refactor
*/

let counter2 = 0;

combine(
  onIncrementClick,
  onDecrementClick,
  onDoubleClick,
  onHalveClick,
).observe(result => {
  counter2 = result;
});


