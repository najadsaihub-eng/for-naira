const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const story = document.getElementById("story");

startBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    story.classList.remove("hidden");

});
