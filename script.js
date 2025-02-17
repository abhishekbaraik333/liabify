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


document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("formContainer");
    const salaryForm = document.getElementById("salaryForm");
    const resultContainer = document.getElementById("resultContainer");
    const basicSalaryInput = document.getElementById("basicSalary");
    const salaryAdvanceSpan = document.getElementById("salaryAdvance");

    // Function to calculate salary advance
    function calculateAdvance() {
        const basicSalary = parseFloat(basicSalaryInput.value) || 0;
        salaryAdvanceSpan.textContent = (basicSalary * 0.4).toFixed(2);
    }

    // Handle form submission
    salaryForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission
        salaryForm.classList.add("hidden"); // Hide form
        resultContainer.classList.remove("hidden"); // Show result container
        calculateAdvance(); // Calculate initial salary advance
    });

    // Update salary advance when basic salary is changed
    basicSalaryInput.addEventListener("input", calculateAdvance);
});
