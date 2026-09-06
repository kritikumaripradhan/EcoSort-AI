// =====================================================
// ECOSORT AI - COMMON SCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // SIDEBAR
    // =============================

    const menuButton = document.getElementById("menuButton");
    const closeMenu = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");
    const menuOverlay = document.getElementById("menuOverlay");

    function openSidebar() {
        if (sidebar) {
            sidebar.classList.add("open");
        }

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }
    }

    function closeSidebar() {
        if (sidebar) {
            sidebar.classList.remove("open");
        }

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    }

    // Hamburger button
    if (menuButton) {
        menuButton.addEventListener("click", function (e) {
            e.preventDefault();
            openSidebar();
        });
    }

    // Close button
    if (closeMenu) {
        closeMenu.addEventListener("click", function (e) {
            e.preventDefault();
            closeSidebar();
        });
    }

    // Overlay click
    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSidebar);
    }


    // =============================
    // THEME
    // =============================

    const themeToggle = document.getElementById("themeToggle");
    const themeText = document.getElementById("themeText");

    const savedTheme = localStorage.getItem("ecosort-theme");

    // Dark mode by default
    if (savedTheme === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }

    function updateThemeButton() {

        const isDark =
            document.body.classList.contains("dark-mode");

        if (themeText) {
            themeText.textContent =
                isDark ? "Dark Mode" : "Light Mode";
        }
    }

    // Set correct text on page load
    updateThemeButton();


    // Theme switch
    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "ecosort-theme",
                isDark ? "dark" : "light"
            );

            updateThemeButton();
        });
    }

});