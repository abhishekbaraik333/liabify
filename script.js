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
