document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector("#toggle-theme input");
    const logo = document.querySelector(".logo");
    
    const lightLogo = '../static/lightmodelogo.png';
    const darkLogo = '../static/darkmodelogo.png';

    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    logo.src = currentTheme === "dark" ? darkLogo : lightLogo;
    toggleSwitch.checked = currentTheme === "dark";

    toggleSwitch.addEventListener("change", function () {
        const newTheme = toggleSwitch.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        logo.src = newTheme === "dark" ? darkLogo : lightLogo;
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.thechecklist input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {
        const checkedState = localStorage.getItem(`break-${index}`);
        checkbox.checked = checkedState === 'true';
        toggleCross(checkbox);
    });

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(`break-${index}`, checkbox.checked);
            toggleCross(checkbox);
        });
    });
});

function toggleCross(checkbox) {
    const labelSpan = checkbox.nextElementSibling;
    if (checkbox.checked) {
        labelSpan.style.textDecoration = "line-through";
    } else {
        labelSpan.style.textDecoration = "none"; 
    }
}
