

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
// const harmlessRansomNote = (noteText, magazineText) => {
//   let noteTextArr = noteText.split(' ');
//   let magazineTextArr = magazineText.split(' ');
//   const magazineObj = {};
//   magazineTextArr.forEach(word => {
//     if (!magazineObj[word]) magazineObj[word] = 0;
//     magazineObj[word]++;
//   });

//   let noteIsPossible = true;
//   noteTextArr.forEach(word => {
//     if (magazineObj[word]) {
//       magazineObj[word]--;
//       if (magazineObj[word] < 0) noteIsPossible = false;
//     }
//     else noteIsPossible = false;
//   })

//   return noteIsPossible;
// }


// console.log(harmlessRansomNote('ber test secret', 'test s ads now  s sad ber deer sda ber beer  ber'));

// new Algorithm
//Is palindrome

// const isPalindrome = (str) => {
//   str = str.toLowerCase();
//   let charArr = str.split('');
//   let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   let lettersArr = [];
//   charArr.forEach(char => {
//     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
//   });

//   return lettersArr.join('') === lettersArr.reverse().join('');
// }


// console.log(isPalindrome('test one'));


// --------- Challenges 


// --- Word counter

// const counter = (str) => {
//   return str.split(' ').length;
// }

// console.log(counter('Hew  sa dasad sdas dsas sad'));



