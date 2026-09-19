// ================================
// TALENTBRIDGE JAVASCRIPT
// ================================


// -------------------------------
// REGISTER BUTTON
// -------------------------------

const enterBtn = document.getElementById("enterBtn");


// -------------------------------
// HOW IT WORKS BUTTON
// -------------------------------

const howBtn = document.getElementById("howBtn");

if (howBtn) {
    howBtn.addEventListener("click", function () {
        const section = document.getElementById("how-it-works");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    });
}


// -------------------------------
// ANIMATED STATISTICS
// -------------------------------

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(
            1,
            Math.ceil(target / 60)
        );

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target.toLocaleString();

                return;
            }

            counter.textContent =
                current.toLocaleString();

            requestAnimationFrame(updateCounter);
        }

        updateCounter();

    });
}


// Start counters when statistics become visible

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                startCounters();
            }

        });

    },
    {
        threshold: 0.3
    }
);

if (statsSection) {
    observer.observe(statsSection);
}


// -------------------------------
// NAVBAR SCROLL EFFECT
// -------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(2, 6, 25, 0.98)";

    } else {

        navbar.style.background =
            "rgba(4, 8, 30, 0.92)";
    }

});


// -------------------------------
// ACTIVE NAVIGATION
// -------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// -------------------------------
// FEATURE CARD HOVER EFFECT
// -------------------------------

const featureCards =
    document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform =
            "translateY(-10px) scale(1.01)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform =
            "translateY(0) scale(1)";

    });

});


// -------------------------------
// AI CARD MOUSE MOVEMENT
// -------------------------------

const aiCard = document.querySelector(".ai-card");

document.addEventListener("mousemove", function(event) {

    if (!aiCard || window.innerWidth < 900) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 8;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 8;

    aiCard.style.transform =
        `translate(${x}px, ${y}px)`;

});