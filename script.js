//==============================
// Mobile Navigation
//==============================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

    } else {

        menuToggle.innerHTML = "☰";

    }

});

//==============================
// Close Menu After Clicking
//==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});
//==================================
// Weekly Pricing Engine
//==================================

const pricing = {

    starter:499,

    standard:749,

    premium:1199

};

const discounts = {

    Monday:70,

    Tuesday:60,

    Wednesday:50,

    Thursday:40,

    Friday:30,

    Saturday:20,

    Sunday:10

};

const today = new Date().toLocaleDateString("en-US",{

    weekday:"long"

});

const discount = discounts[today];


document.getElementById("starter-discount").textContent = discount + "% OFF";

document.getElementById("standard-discount").textContent = discount + "% OFF";

document.getElementById("premium-discount").textContent = discount + "% OFF";

function updatePrice(original, discount){

    return Math.round(original*(100-discount)/100);

}

document.getElementById("starter-original").textContent="$"+pricing.starter;

document.getElementById("standard-original").textContent="$"+pricing.standard;

document.getElementById("premium-original").textContent="$"+pricing.premium;

document.getElementById("starter-price").textContent="$"+updatePrice(pricing.starter,discount);

document.getElementById("standard-price").textContent="$"+updatePrice(pricing.standard,discount);

document.getElementById("premium-price").textContent="$"+updatePrice(pricing.premium,discount);
//==================================
// Countdown Timer
//==================================

const countdown = document.getElementById("countdown");

if (countdown) {

    function updateCountdown() {

        const now = new Date();

        const tomorrow = new Date(now);

        tomorrow.setHours(24, 0, 0, 0);

        const difference = tomorrow - now;

        const hours = Math.floor(difference / (1000 * 60 * 60));

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.textContent =
            `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

}
//==================================
// FAQ Accordion
//==================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        // Close all other FAQs
        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.maxHeight = null;

                other.querySelector(".faq-question").classList.remove("active");

            }

        });

        // Toggle current FAQ
        question.classList.toggle("active");

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
//==================================
// Scroll Reveal Animation
//==================================

const revealElements = document.querySelectorAll(

    ".service-card, .country-card, .why-card, .pricing-card, .offer-card, .testimonial-card, .tech-card, .agreement-card, .contact-card, .trust-box, .section-header"

);

revealElements.forEach(element => {

    element.classList.add("fade-up");

});

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach(element => {

    observer.observe(element);

});
//==================================
// Contact Form Validation
//==================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 2) {

            alert("Please enter your name.");

            return;

        }

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        if (message.length < 20) {

            alert("Please provide more details about your project.");

            return;

        }

        alert("Thank you! Your project request is ready to be submitted.");

        contactForm.reset();

    });

}
//==================================
// Smooth Scroll for Internal Links
//==================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

//==================================
// Active Navigation Link
//==================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

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

//==================================
// Navbar Shadow
//==================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

//==================================
// Lazy Loading Images
//==================================

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});
//==================================
// Scroll To Top
//==================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//==================================
// Prevent Multiple Form Submits
//==================================

document.querySelectorAll("form").forEach(form => {

    form.addEventListener("submit", function() {

        const submitBtn = form.querySelector("button[type='submit']");

        if (!submitBtn) return;

        submitBtn.disabled = true;

        submitBtn.textContent = "Sending...";

    });

});

//==================================
// Global Error Logging
//==================================

window.addEventListener("error", function(event){

    console.error("Website Error:", event.message);

});

console.log("%cWebsite Loaded Successfully","color:#2563eb;font-size:16px;font-weight:bold;");