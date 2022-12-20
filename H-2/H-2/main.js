// const block = document.querySelector(".little_block");
// const button = document.querySelector(".button");
// let position = 0;
// let topPosition = 0;


// const moveBlock = () => {
//   if (position <= 300 && topPosition == 0) {
//     position += 20;
//     block.style.left = `${position}px`;
//     setTimeout(moveBlock, 80);
//   } else if (position >= 300 && topPosition <= 300) {
//     topPosition += 20;
//     block.style.top = `${topPosition}px`;
//     setTimeout(moveBlock, 80);
//   } else if (topPosition >= 300 && position != 0) {
//     position -= 20;
//     block.style.left = `${position}px`;
//     setTimeout(moveBlock, 80);
//   } else if (position == 0 && topPosition != 0) {
//     topPosition -= 20;
//     block.style.top = `${topPosition}px`;
//     setTimeout(moveBlock, 80);
//   }
// };

// button.onclick = ()=>{
//   moveBlock()
// }







const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const counter = document.querySelector(".counter");
let value = 0;



start.addEventListener("click", ()=>{
  const intCount = setInterval(() => {
    counter.innerHTML= value;
    value += 1;
  }, 1000);
  stop.addEventListener("click", ()=>{
    clearInterval(intCount)
  })
})



