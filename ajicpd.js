

const section = document.getElementById("section");
const login_1 = document.getElementById("login_1");
const btn = document.getElementById("btn")

login_1.addEventListener("click", () => {
    section.classList.add("add");
    section_1.classList.remove("add_1");
});

btn.addEventListener("click", () => {
    section.classList.remove("add")
})


const section_1 = document.getElementById("section_1");
const login_2 = document.getElementById("login_2");
const btn1 = document.getElementById("btn1")

login_2.addEventListener("click", () => {
    section_1.classList.add("add_1");
    section.classList.remove("add")
});

btn1.addEventListener("click", () => {
    section_1.classList.remove("add_1");
})
