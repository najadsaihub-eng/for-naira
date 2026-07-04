const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const story = document.getElementById("story");

startBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    story.style.display = "flex";

});
