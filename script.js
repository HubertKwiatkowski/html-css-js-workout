const colorsForBox = ['blue', 'red', 'yellow', 'purple', 'green'];
const boxToChange = document.getElementById('box');

let currentIndex = 0;

const changeColor = () => {
  boxToChange.style.borderColor = colorsForBox[currentIndex];
  currentIndex = (currentIndex + 1);

  setTimeout(changeColor, 3000);
};

setTimeout(changeColor, 3000);
