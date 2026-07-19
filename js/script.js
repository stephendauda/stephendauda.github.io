/* ==========================================
   STEPHEN DAUDA PORTFOLIO
   VERSION 5
========================================== */

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Header shadow on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 6px 25px rgba(0,0,0,0.12)";

        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "none";

        header.style.background = "#ffffff";

    }

});

// Fade-in animation when scrolling

const animatedItems = document.querySelectorAll(

    ".research-card, .project-card, .publication-card, .certificate-card, .contact-card, .about-card, .stat-card"

);

animatedItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all 0.8s ease";

});

const revealOnScroll = () => {

    animatedItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// Highlight active navigation link

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("Stephen Dauda Portfolio Loaded Successfully");