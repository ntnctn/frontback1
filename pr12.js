// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
  }
  
  // Функция изменения цвета фона
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Функция переключения видимости элемента
  function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    } else {
      console.error(`Элемент с селектором "${selector}" не найден.`);
    }
  }
  
  // Функция извлечения utm_term и замены текста h1
  function updateH1FromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
  
    if (utmTerm && h1Element) {
      h1Element.textContent = utmTerm;
    } 
  }
  
  
  // Функция вывода текущего времени
  function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
  }
  
  // Функция сброса цвета фона (добавлена)
  function resetBackgroundColor() {
    document.body.style.backgroundColor = "white"; // или исходный цвет
  }
  
  
  // Вызов функций
  showMessage("Скрипт загружен!");
  logCurrentTime();
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // resetBackgroundColor(); // Сбрасываем цвет фона перед изменением
    // changeBackgroundColor("lightblue");
    toggleVisibility('.content');
    updateH1FromUtmTerm(); // Обновляем h1 после загрузки страницы
  });
  
  
  