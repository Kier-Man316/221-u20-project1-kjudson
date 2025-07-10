function goToLocation(path) {
    window.location.href = path;
}
function checkKeyPress(e) {
    console.log("hi")
    if (e.keyCode === 32) {
        e.preventDefault();
        goToLocation('https://www.marvel.com/characters/spider-man-peter-parker/in-comics/profile');
    }
}
window.onload = function () {
    console.log("lop")
    document.body.setAttribute("tabindex", "0");
    document.body.focus();
    document.body.addEventListener("keydown", checkKeyPress);
    const clickTarget = document.getElementById('portal_button');
    if (clickTarget) {
      clickTarget.style.cursor = 'pointer';
      clickTarget.addEventListener('click', () => {
        goToLocation("https://www.marvel.com/characters/spider-man-peter-parker/in-comics/profile");
        });
    }
};

