document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    // Toggle navigation menu for mobile
    menuToggle.addEventListener("click", () => {
        navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Load More Functionality
    const loadMoreBtn = document.getElementById("load-more");
    const serviceList = document.getElementById("service-list");

    loadMoreBtn.addEventListener("click", () => {
        const moreServices = ["✔ SEO Optimization", "✔ Digital Marketing"];
        moreServices.forEach(service => {
            const p = document.createElement("p");
            p.textContent = service;
            serviceList.appendChild(p);
        });
        loadMoreBtn.style.display = "none";
    });

    // Form Submission
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", event => {
        event.preventDefault();
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";
        form.reset();
    });
});
