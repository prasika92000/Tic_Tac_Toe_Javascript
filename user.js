const Game=require("./Game");
let g1=Game.newGame("rasika","bhumika");
let g2=Game.newGame("dipika","tanuja")

console.log(g1.play(2));
console.log("This is second game");
console.log(g2.play(1));

console.log(g1.play(6));
console.log("This is second game");
console.log(g2.play(4));

console.log(g1.play(5));
console.log("This is second game");
console.log(g2.play(7));