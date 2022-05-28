let nr = +prompt("Alege numarul");

let varianta1 = 5 * x;
let varianta2 = 2 - x;
let varianta3 = 3 + x;

let x = 10;
let z = 0;
let t = 3;

if (nr < x) {
    alert(varianta1)
} else if (z <= nr && nr <= x) {
    alert(varianta2)
} else if (t + nr > x) {
    alert(varianta3)
}