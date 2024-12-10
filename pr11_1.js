// 1. Изменение текста заголовка H1
const h1 = document.querySelector('h1');
if (h1) {
  h1.textContent = "Добро пожаловать на наш сайт!";
} else {
  console.error("Заголовок H1 не найден на странице.");
}

// 2. Изменение цвета текста заголовка H2
const h2 = document.querySelector('h2');
if (h2) {
  h2.style.color = 'red';
} else {
  console.error("Заголовок H2 не найден на странице.");
}

// 3. Изменение текста первого параграфа
const firstParagraph = document.querySelector('p:first-of-type');
if (firstParagraph) {
  firstParagraph.textContent = "Это новый текст параграфа.";
} else {
  console.error("Первый параграф не найден на странице.");
}

// 4. Скрытие встроенного видео
const video = document.querySelector('iframe');
if (video) {
  video.style.display = 'none';
} else {
  console.error("Встроенное видео не найдено на странице.");
}