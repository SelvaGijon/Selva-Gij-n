// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/wooden-spoon-4546584_960_720.png.png') {
    myImage.setAttribute ('src','images/tortilla-622974_960_720.png');
  } else {
    myImage.setAttribute ('src','images/wooden-spoon-4546584_960_720.png.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Inserta tu apodo. El que más te guste. ;-)');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bienvenido a MiVä´s World, ' + myName + '. ¡Disfruta!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenido a MiVä´s World, ' + storedName + '. ¡Disfruta!';
}

myButton.onclick = function() {
  setUserName();
}
