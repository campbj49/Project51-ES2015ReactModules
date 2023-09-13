import {choice, remove} from "./helpers";
import fruits from "./foods";

let rndFruit = choice(fruits);
console.log(`I'd like one ${rndFruit}, please}` );
console.log(`Here you go:${rndFruit}`);
remove(fruits,rndFruit);
//fruits = ["hee"];
console.log("Delicious! May I have another?");
console.log(`I'm sorry we're all out. We have ${fruits.length} left.`)