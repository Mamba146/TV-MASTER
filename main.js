/* ===================== BURGER MENU ===================== */
const burger = document.getElementById("burger");
const nav = document.getElementById("navMenu");

burger.onclick = () => {
    nav.classList.toggle("active");
};


/* ===================== LIGHTBOX ===================== */
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

document.querySelectorAll(".gallery-photo").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.innerHTML = `<img src="${img.src}">`;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


/* ===================== SCROLL REVEAL ===================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

/* Секции */
document.querySelectorAll(".section").forEach(sec => observer.observe(sec));

/* Карточки услуг */
document.querySelectorAll(".card-tv").forEach(card => observer.observe(card));

/* Почему я */
document.querySelectorAll(".why-item").forEach(item => observer.observe(item));

/* Галерея */
document.querySelectorAll(".gallery-item").forEach(item => observer.observe(item));

/* Отзывы */
document.querySelectorAll(".review-item").forEach(item => observer.observe(item));

// Каналы
document.querySelectorAll(".channel").forEach(ch => observer.observe(ch));
