const startBtn = document.getElementById("startBtn");

const welcome = document.getElementById("welcome");
const story = document.getElementById("story");

startBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.classList.add("hidden");

        story.classList.remove("hidden");

        story.style.opacity = "0";

        setTimeout(() => {

            story.style.opacity = "1";

        },50);

    },500);

});
