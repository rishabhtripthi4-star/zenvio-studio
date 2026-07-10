const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const answer = item.querySelector(".faq-answer");

        const isOpen = answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach(a => {

            a.style.maxHeight = null;

        });

        if (!isOpen) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});