const navButton = document.getElementById("navButton");
const dropdownMenu = document.getElementById("dropdownMenu");

navButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show"); // Переключаем класс "show"
});

// Закрыть меню, если кликнули вне его
window.addEventListener("click", (event) => {
  if (
    !navButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show"); // Скрыть меню
  }
});
