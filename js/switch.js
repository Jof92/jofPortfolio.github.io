var pos = 31;
function slide() {
  var outer = document.getElementsByClassName("outer")[0];
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("body-color");
  outer.classList.toggle("day");
  outer.classList.toggle("night");
  var slider = document.getElementsByClassName("slider")[0];
  slider.style.transform = `translateX(${pos}px)`;
  pos = -pos;
}