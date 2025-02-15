document.addEventListener("DOMContentLoaded", () => {
    const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");

    function toggleActive(event) {
        monthlyBtn.classList.remove("active");
        yearlyBtn.classList.remove("active");
        event.target.classList.add("active");
    }

    monthlyBtn.addEventListener("click", toggleActive);
    yearlyBtn.addEventListener("click", toggleActive);

    const monthlyBtn2 = document.getElementById("monthlyBtn2");
    const yearlyBtn2 = document.getElementById("yearlyBtn2");

    function toggleActive2(event) {
        monthlyBtn2.classList.remove("active");
        yearlyBtn2.classList.remove("active");
        event.target.classList.add("active");
    }

    monthlyBtn2.addEventListener("click", toggleActive2);
    yearlyBtn2.addEventListener("click", toggleActive2);
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".change-btn");
    const contentDivs = document.querySelectorAll(".content-div");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove "active" class from all buttons and hide all divs
            buttons.forEach(btn => btn.classList.remove("active"));
            contentDivs.forEach(div => div.classList.remove("active"));

            // Add "active" class to the clicked button
            button.classList.add("active");

            // Show the corresponding div
            const targetDiv = document.getElementById(button.getAttribute("data-target"));
            if (targetDiv) {
                targetDiv.classList.add("active");
            }
        });
    });

    // Set the first div as active by default
    buttons[0].classList.add("active");
    contentDivs[0].classList.add("active");
});

