const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.002 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const scrollLinks = document.querySelectorAll('.scroll-to');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            lenis.scrollTo(targetElement);
        }
    });
});

const scrollTop = document.querySelectorAll('.scroll_top');
scrollTop.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        lenis.scrollTo(0);
    });
});

const scrollToTopButton = document.querySelector('.scroll-to-top');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        const firstProject = document.querySelector('.center_project_list ul li');
        if (firstProject) {
            const offset = window.innerHeight + 100;
            lenis.scrollTo(firstProject.offsetTop - offset);
        }
    });
}

const scrollDownButton = document.querySelector('.scroll-down');
if (scrollDownButton) {
    scrollDownButton.addEventListener('click', function(event) {
        event.preventDefault();
        const documentHeight = document.documentElement.scrollHeight;
        lenis.scrollTo(documentHeight);
    });
}

const navBar = document.querySelector('.nav_bar_container');
const hoverBg = document.createElement('div');
hoverBg.classList.add('hover_bg_nav');
navBar.appendChild(hoverBg);

const navLinks = document.querySelectorAll('.nav_bar_container a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const linkRect = link.getBoundingClientRect();
        const navBarRect = navBar.getBoundingClientRect();
        hoverBg.style.width = `${linkRect.width}px`;
        hoverBg.style.left = `${linkRect.left - navBarRect.left}px`;
    });

    link.addEventListener('mouseleave', (e) => {
        const linkRect = link.getBoundingClientRect();
        const navBarRect = navBar.getBoundingClientRect();
        const centerX = linkRect.left + linkRect.width / 2 - navBarRect.left;
        hoverBg.style.transition = 'width 0.6s ease, left 0.6s ease';
        hoverBg.style.width = '0px';
        hoverBg.style.left = `${centerX}px`;
    });
});

document.getElementById("mail").addEventListener("click", function() {
    const email = "info@quinnotto.nl";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
});

document.getElementById("phone").addEventListener("click", function() {
    const phone = "+31 6 14466292";
    navigator.clipboard.writeText(phone).then(() => {
        alert("Phone copied to clipboard!");
    });
});

document.getElementById("github").addEventListener("click", function() {
    const github = "https://github.com/QuinnOtto/";
    window.open(github);
    });

const dynamicText = document.getElementById("dynamic-text");
const words = ["responsive", "interactive", "impressive", "innovative"];
let wordIndex = 0;
const colors = ["#42C2FF", "#1E96FC", "#5ADBFF"];
const classes = ["highlight-blue", "highlight-dark-blue", "highlight-light-blue"];

function changeText() {
    dynamicText.style.opacity = 0;
    dynamicText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        let kleur = Math.floor(Math.random() * colors.length);
        dynamicText.textContent = words[wordIndex];
        dynamicText.className = classes[kleur];
        dynamicText.style.opacity = 1;
        dynamicText.style.transform = "translateY(0)";
        dynamicText.style.transition = "all 0.3s ease-in-out";

        wordIndex = (wordIndex + 1) % words.length;
    }, 300);
}

changeText();
setInterval(changeText, 2000);

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

const project1Elements = document.querySelectorAll(".project");
project1Elements.forEach(element => {
    element.addEventListener("click", function() {
        window.open("https://github.com/QuinnOtto/");
    });
});

const javascriptElement = document.getElementById("js");
javascriptElement.addEventListener("click", function() {
    window.open("https://nl.wikipedia.org/wiki/JavaScript");
});
const htmlElement = document.getElementById("html");
htmlElement.addEventListener("click", function() {
    window.open("https://nl.wikipedia.org/wiki/HTML");
});
const cssElement = document.getElementById("css");
cssElement.addEventListener("click", function() {
    window.open("https://nl.wikipedia.org/wiki/Cascading_Style_Sheets");
});
const nodejsElement = document.getElementById("nodejs");
nodejsElement.addEventListener("click", function() {
    window.open("https://nl.wikipedia.org/wiki/Node.js");
});
const discordjsElement = document.getElementById("discordjs");
discordjsElement.addEventListener("click", function() {
    window.open("https://discord.js.org/");
});
const figmaElement = document.getElementById("figma");
figmaElement.addEventListener("click", function() {
    window.open("https://www.figma.com/");
});
const studentJobElement = document.getElementById("job_container_student");
studentJobElement.addEventListener("click", function() {
    window.open("https://www.glr.nl/opleidingen/software-developer");
});