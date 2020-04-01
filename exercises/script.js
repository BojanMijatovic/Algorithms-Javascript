
const name = document.createElement('p');


const years = document.getElementById('year').value;
const showDays = document.createElement('p');
const days = years * 365;
name.innerHTML = ` <p> My name is John and I have ${days} days off life</p>`;

document.body.append(name);