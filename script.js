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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove "active" class from all buttons and hide all divs
      buttons.forEach((btn) => btn.classList.remove("active"));
      contentDivs.forEach((div) => div.classList.remove("active"));

      // Add "active" class to the clicked button
      button.classList.add("active");

      // Show the corresponding div
      const targetDiv = document.getElementById(
        button.getAttribute("data-target")
      );
      if (targetDiv) {
        targetDiv.classList.add("active");
      }
    });
  });

  // Set the first div as active by default
  buttons[0].classList.add("active");
  contentDivs[0].classList.add("active");
});
document.getElementById("calculate").addEventListener("click", function () {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const repaymentMonths = parseInt(document.getElementById("repay").value);
  const loanAmountSpan = document.getElementById("loan-amount");
  const serviceChargeSpan = document.getElementById("service-charge");
  const totalAmountSpan = document.getElementById("total-amount");

  if (isNaN(basicSalary) || basicSalary <= 0) {
    alert("Please enter a valid basic salary.");
    return;
  }

  // Calculate Loan Amount (60% of Basic Salary)
  const loanAmount = basicSalary * 0.6;

  // Calculate Service Charge based on repayment months
  let serviceChargePercentage = 0;
  if (repaymentMonths === 1) {
    serviceChargePercentage = 1;
  } else if (repaymentMonths === 2) {
    serviceChargePercentage = 2;
  } else if (repaymentMonths >= 3) {
    serviceChargePercentage = 3;
  }

  const serviceCharge = (basicSalary * serviceChargePercentage) / 100;

  // Calculate Total Amount Payable
  const totalAmount = loanAmount + serviceCharge;

  // Update UI
  serviceChargeSpan.textContent = serviceCharge.toFixed(2);
  loanAmountSpan.textContent = totalAmount.toFixed(2);
});
