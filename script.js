document.addEventListener("DOMContentLoaded", function () {
    // Анимация появления элементов при прокрутке
    const elements = document.querySelectorAll(".advantage, .faq-item");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
