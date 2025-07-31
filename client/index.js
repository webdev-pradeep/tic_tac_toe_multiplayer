const socket = io("ws://localhost:5000");

let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector('#reset');
// let newGameBtn = document.querySelector('#new-btn');
// let msgContainer = document.querySelector('.msg-container');
// let msg = document.querySelector('#msg');

socket.on("data", (data) => {
  console.log(data);
});
socket.on("win", (win) => {
  console.log(win);
});

boxes.forEach((box, i) => {
  box.addEventListener("click", function () {
    socket.emit("input", i);
  });
});

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove('hide');
//   disableBoxes();
// };

// const resetGame = () => {
//   turnO = true;
//   enableBoxes();
//   msgContainer.classList.add('hide');
// };

// newGameBtn.addEventListener('click', resetGame);
// resetBtn.addEventListener('click', resetGame);
