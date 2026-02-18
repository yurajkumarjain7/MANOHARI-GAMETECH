// for gravity (object/developer can edit this for throw)
let obj = document.getElementById("object");

let position = 0;
let ground = 00; // ground level

function throwObject() {

  function fall() {
    position += 20; 
    obj.style.top = position + "px";

    if (position < ground) {
      requestAnimationFrame(fall);
    }
  }

  fall();
}
