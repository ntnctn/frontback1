const buttons = document.querySelectorAll(".open-modal");
const contactForm = document.getElementById("contactForm"); 
const formTitle = document.getElementById("form-title");
const cls = document.getElementsByClassName("close")[0];

const sbmit = document.getElementById("submit");

// Функция для открытия модального окна
function openForm(service) {
    formTitle.textContent = `Форма обратной связи для ${service}`; // Устанавливаем заголовок
    contactForm.style.display = "block"; // Показываем модальное окно
}


// Назначаем обработчики событий на кнопки

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); // Получаем название услуги
        openForm(service); // Открываем модальное окно с заголовком
    });
});


// Закрываем модальное окно при нажатии на "X"
cls.onclick = function() {
 contactForm.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
 if (event.target === contactForm) {
 contactForm.style.display = "none";
 }
}

//14 практичесская 





sbmit.onclick = function() {
  
  const submitButton = document.getElementById("submit");
  // Меняем цвет кнопки
  submitButton.style.backgroundColor = "green";
  setTimeout(() => {
    submitButton.style.backgroundColor = ""; // Возвращаем исходный цвет
  }, 1500);

  // Выводим сообщение в стандартном окне
  alert("Форма отправлена!");
 }

// // шапка

// $(function() {
//  let header = $('.header');
//  let hederHeight = header.height(); // вычисляем высоту шапки
  
//  $(window).scroll(function() {
//    if($(this).scrollTop() > 1) {
//     header.addClass('header_fixed');
//     $('body').css({
//        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
//     });
//    } else {
//     header.removeClass('header_fixed');
//     $('body').css({
//      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
//     })
//    }
//  });
// });


