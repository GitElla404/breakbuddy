document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector("#toggle-theme input");
    const logo = document.querySelector(".logo");
    
    const lightLogo = '../static/lightmodelogo.png';
    const darkLogo = '../static/darkmodelogo.png';

    const currentTheme = localStorage.getItem("theme") || "light";
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
