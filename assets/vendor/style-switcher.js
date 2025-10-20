
// Toggle the visibility of the style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide the style switcher when scrolling
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme colors functionality
const colorOptions = document.querySelectorAll(".colors span");
function setActiveStyle(color) {
    // Remove the active color class from the body and apply the selected one
    document.body.className = ''; // Clear any existing color class
    document.body.classList.add(color);
}

// Add event listeners to each color option
colorOptions.forEach((colorOption) => {
    colorOption.addEventListener("click", () => {
        const colorClass = colorOption.classList[0]; // e.g., 'color-1', 'color-2'
        setActiveStyle(colorClass);
    });
});

// Dark/Light mode toggle
const dayNightToggle = document.querySelector(".day-night");
const dayNightIcon = dayNightToggle.querySelector("i");

dayNightToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon based on the mode
    if (document.body.classList.contains("dark-mode")) {
        dayNightIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        dayNightIcon.classList.replace("fa-sun", "fa-moon");
    }
});
