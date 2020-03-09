var btnElement = document.querySelector('button');
let count = 1;

btnElement.onclick = function() {
  // Cria um novo elemento box
  let boxElement = document.createElement("div");
  boxElement.className = "box";
  boxElement.id = "box-" + count;
  boxElement.style.width = '100px';
  boxElement.style.height = '100px';
  boxElement.style.marginTop = '50px';
  boxElement.style.backgroundColor = '#f00';

  boxElement.addEventListener("mouseover", () => {
    let newColor = getRandomColor();

    console.log(boxElement.id + ": " + newColor);
    boxElement.style.backgroundColor = newColor;
  });
  
  // Adiciona um novo elemento box para app
  document.getElementById('app').appendChild(boxElement);
    count++;
  }

function getRandomColor() {
  var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return color;
}