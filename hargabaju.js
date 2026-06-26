const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveal.forEach((item) => {
    let top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
});
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Pesan berhasil dikirim!");
  });
