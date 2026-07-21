document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("check-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    output.textContent = "Deployed at: " + new Date().toLocaleString();
  });
});
