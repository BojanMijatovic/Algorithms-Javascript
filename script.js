

// fizz buzz

// const fizzbuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     let element = i;  // create i 
//     if (i % 3 === 0 && i % 5 === 0) {
//       element = 'fizzbuzz';
//       console.log(`${i} ` + element);
//     }
//     else if (i % 3 === 0) {
//       element = 'Fizz';
//       console.log(`${i} ` + element);
//     } else if (i % 5 === 0) {
//       element = 'Buzz'
//       console.log(`${i} ` + element);
//     }
//   }
// }

// fizzbuzz(30);


// New Algorithm
// Harmless Ransom Note
const harmlessRansomNote = (noteText, magazineText) => {
  let noteTextArr = noteText.split(' ');
  let magazineTextArr = magazineText.split(' ');
  const magazineObj = {};
  magazineTextArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  console.log(magazineObj);
}

harmlessRansomNote('bed', 'hits is all bed adn ddd');
