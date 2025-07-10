


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
function checkKeyPress(e) {
  if (e.keyCode == 32) {
      e.preventDefault();
    goToLocation('/feed');
  }
}
window.onload = function() {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  document.body.addEventListener("keyup", checkKeyPress);
  const clickTarget = document.getElementById("fade_text");
  if(clickTarget) {
    clickTarget.style.cursor = "pointer";
    clickTarget.addEventListener("click" , () => {
      goToLocation("/feed");
    });
  }
};

