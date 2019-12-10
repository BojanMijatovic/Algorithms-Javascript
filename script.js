// fizz buzz


const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    let element = i;  // create i 
    if (i % 3 === 0 && i % 5 === 0) {
      element = 'fizzbuzz';
      console.log(`${i} ` + element);
    }
    else if (i % 3 === 0) {
      element = 'Fizz';
      console.log(`${i} ` + element);
    } else if (i % 5 === 0) {
      element = 'Buzz'
      console.log(`${i} ` + element);
    }
  }
}

fizzbuzz(30);