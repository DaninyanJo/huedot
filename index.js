
let cords = document.getElementById('coords');
let box = document.querySelector('.box');

window.addEventListener('mousemove', ()=>{
  let y = event.clientY;
  let x = event.clientX;
  // box.style.top = y + 'px';
  // box.style.left = x + 'px';
 
  box.setAttribute('style', 
  'filter:hue-rotate('+ angl()+'deg); top: '+y+'px; left: '+x+'px')
})

function angl() {
  return (event.clientY + event.clientX)*0.5
}