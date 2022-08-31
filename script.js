const arr = [];
let i = 1;

loop();

function loop() {
  if (i > 0) {
    if (arr.length == 9) {
      arr.pop();
    }
    arr.unshift(i);
    i++;
    console.log(arr);
    setTimeout(loop, 1000);
  }
}
