function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function load_first_row(){
  var first_row = document.querySelectorAll(".firstload");
  for (var i = 0; i< first_row.length; i++)
  {
    first_row[i].classList.add("active");
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", load_first_row);
