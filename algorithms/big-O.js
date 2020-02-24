console.log('test');

const nums = [1, 3, 4, 5, 6, 76, 7, 8];

const redNums = nums.reduce((total, current) => total + current);

console.log(redNums);


const addUpTo = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(3));

