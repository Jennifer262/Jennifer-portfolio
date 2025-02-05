document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const textElement = document.getElementById("typing-text");
    const texts = ["UI/UX Designer", "Web Developer", "Content Creator"];
    let index = 0, charIndex = 0, isDeleting = false;

    function type() {
        let currentText = texts[index];
        textElement.textContent = isDeleting 
            ? currentText.substring(0, charIndex--) 
            : currentText.substring(0, charIndex++);

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }
    type();

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("dark-mode-toggle");
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById(this.getAttribute('href').substring(1))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });
});
