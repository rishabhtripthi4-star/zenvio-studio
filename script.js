const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            faq.querySelector(".faq-answer").style.maxHeight = null;

        });

        if(!isActive){

            item.classList.add("active");

            const answer = item.querySelector(".faq-answer");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
/*==================================================
            ZENIVO STUDIO
        PREMIUM NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
                SELECTORS
    =========================================*/

    const header = document.querySelector(".header");

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    const links = document.querySelectorAll(".nav-links a");

    /*=========================================
            STICKY HEADER
    =========================================*/

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

    /*=========================================
            MOBILE MENU
    =========================================*/

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

            menuBtn.classList.toggle("active");

        });

    }

    /*=========================================
            CLOSE MENU
    =========================================*/

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

});
/*==================================================
        PART 22
        SCROLL ANIMATIONS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            SCROLL REVEAL
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".service-card, .project-card, .why-item, .why-card, .process-card, .pricing-card, .faq-item, .contact-item, .contact-form, .section-title"

    );

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    revealElements.forEach(item=>{

        item.classList.add("fade-up");

        revealObserver.observe(item);

    });

});
/*==================================================
        ACTIVE NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            const height=section.offsetHeight;

            if(scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

});
/*==================================================
        SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*==================================================
        BACK TO TOP
==================================================*/

const backTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(!backTop) return;

    if(window.scrollY>700){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

if(backTop){

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/*==================================================
        PART 23
        PREMIUM INTERACTIONS
==================================================*/

/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/*=========================================
        TYPING EFFECT
=========================================*/

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [

        "Premium Websites",

        "Modern UI/UX",

        "Business Growth",

        "Digital Experiences"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

}
/*=========================================
        MAGNETIC BUTTON
=========================================*/

document.querySelectorAll(".primary-btn,.nav-cta").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});
/*==================================================
        PART 24
        PERFORMANCE & UX
==================================================*/

/*=========================================
        LAZY IMAGE FADE-IN
=========================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.dataset.loading = "false";

        img.classList.add("loaded");

        imageObserver.unobserve(img);

    });

}, {

    threshold: 0.1

});

images.forEach(img => {

    img.dataset.loading = "true";

    imageObserver.observe(img);

});
/*=========================================
        PARALLAX BACKGROUND
=========================================*/

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    document.body.style.backgroundPositionY = `${scrolled * 0.15}px`;

});
/*=========================================
        BUTTON CLICK EFFECT
=========================================*/

document.querySelectorAll("button,.primary-btn,.secondary-btn").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {

            button.classList.remove("clicked");

        },200);

    });

});
/*=========================================
        NAVBAR HIDE/SHOW
=========================================*/

let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if(current > lastScroll && current > 120){

        header.style.transform = "translateY(-100%)";

    }else{

        header.style.transform = "translateY(0)";

    }

    lastScroll = current;

});
/*=========================================
        PREVENT DOUBLE SUBMIT
=========================================*/

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

const button=form.querySelector("button");

if(button){

button.disabled=true;

button.textContent="Sending...";

}

});

}
/*==================================================
        PART 25
        PRELOADER
==================================================*/

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if(preloader){

        preloader.classList.add("hide");

        setTimeout(()=>{

            preloader.remove();

        },600);

    }

});
/*==================================================
        COPY EMAIL
==================================================*/

const copyBtn = document.querySelector(".copy-email");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText("hello.zenivostudio@gmail.com");

copyBtn.textContent="Copied!";

setTimeout(()=>{

copyBtn.textContent="Copy Email";

},2000);

});

}
/*==================================================
        FOOTER YEAR
==================================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}
/*==================================================
        CONSOLE BRAND
==================================================*/

console.log(

"%cZenivo Studio",

"font-size:22px;color:#3b82f6;font-weight:bold;"

);

console.log(

"%cPremium websites crafted with precision.",

"font-size:14px;color:#94a3b8;"

);