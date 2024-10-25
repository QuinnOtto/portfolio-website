document.addEventListener("DOMContentLoaded", function() {
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
    const projectListItems = document.querySelectorAll('.center_project_list ul li');
    projectListItems.forEach(item => {
        item.style.position = 'relative';
        const borderBottom = document.createElement('div');
        borderBottom.style.position = 'absolute';
        borderBottom.style.bottom = '0';
        borderBottom.style.left = '0';
        borderBottom.style.height = '1px';
        borderBottom.style.width = '0';
        borderBottom.style.backgroundColor = 'white';
        borderBottom.style.transition = 'width 1s ease-in-out';
        item.appendChild(borderBottom);

        item.addEventListener('mouseenter', () => {
            borderBottom.style.width = '100%';
        });
        item.addEventListener('mouseleave', () => {
            borderBottom.style.width = '0';
        });
    });
    document.getElementById("email").addEventListener("click", function() {
        const email = "info@quinnotto.nl";
        navigator.clipboard.writeText(email).then(() => {
          alert("Email copied to clipboard!");
        })
      });
      document.getElementById("phone").addEventListener("click", function() {
        const phone = "+31 6 14466292";
        navigator.clipboard.writeText(phone).then(() => {
          alert("phone copied to clipboard!");
        })
      });
      document.getElementById("github").addEventListener("click", function() {
        const github = "https://github.com/QuinnOtto/";
        navigator.clipboard.writeText(github).then(() => {
          alert("Github copied to clipbord");
        })
      });
});
const dynamicText = document.getElementById("dynamic-text");
const words = ["responsive", "interactive", "impressive", "innovative"];
let wordIndex = 0;
const colors = ["#42C2FF", "#1E96FC", "#5ADBFF"]

function changeText() {
    dynamicText.style.opacity = 0;
    dynamicText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        let kleur = Math.floor(Math.random() * colors.length);
        dynamicText.textContent = words[wordIndex];
        dynamicText.style.color = colors[kleur];
        dynamicText.style.opacity = 1;
        dynamicText.style.transform = "translateY(0)";

        wordIndex = (wordIndex + 1) % words.length;
    }, 300);
}

setInterval(changeText, 2000);


