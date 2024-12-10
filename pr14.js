
// 3. Анимация появления таблицы с лекциями

const buttonplace = document.querySelector('h1.firstsemh1');
const showLecturesButton = document.createElement('button');
showLecturesButton.textContent = 'Показать лекции';
buttonplace.appendChild(showLecturesButton); // Добавляем кнопку на страницу


const lecturesTable = document.querySelector('.lection table'); // Найдите таблицу лекций
lecturesTable.style.display = 'none'; // Скрываем таблицу по умолчанию

// showLecturesButton.addEventListener('click', () => {
//  lecturesTable.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Добавлены переходы
//  lecturesTable.style.opacity = lecturesTable.style.display === 'none' ? 1 : 0;
//  lecturesTable.style.transform = lecturesTable.style.display === 'none' ? 'translateY(0)' : 'translateY(20px)'; // Анимация плавного появления
//  lecturesTable.style.display = lecturesTable.style.display === 'none' ? 'block' : 'none';
// });



showLecturesButton.addEventListener('click', () => {
  const isVisible = lecturesTable.style.opacity === '1'; //check current state
 
  lecturesTable.style.transition = 'opacity 0.5s ease';
  lecturesTable.style.opacity = isVisible ? '0' : '1';
 
  //only set display to none after fade out is complete
  setTimeout(()=>{
   if (!isVisible) return;
    lecturesTable.style.display = 'none';
  }, 1000); //500ms = 0.5s - adjust if needed
 
  //Show the table before starting the transition (important for the transition to work)
   if(!isVisible){
    lecturesTable.style.display = 'block';
   }
 
 });
 


// 4. Анимация вращения фотографии студента
const studentPhoto = document.getElementById('student-photo'); 
if (studentPhoto) {

  studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transition = 'transform 0.5s ease ';
  studentPhoto.style.transform = 'rotate(360deg)';
  });

  studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transform = 'rotate(0)';
  });

}
// 2. Анимация изменения цвета фона параграфа
const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
  h1.style.backgroundColor = h1.style.backgroundColor === 'blue' ? 'red' : 'blue'; // Toggle between blue and red
});

//форма

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const submitButton = document.getElementById("submit");

//   // Выводим сообщение в стандартном окне
//   alert("Форма отправлена!");

//   // Меняем цвет кнопки
//   submitButton.style.backgroundColor = "green";
//   setTimeout(() => {
//     submitButton.style.backgroundColor = ""; // Возвращаем исходный цвет
//   }, 1500);
// });

const sbmit = document.getElementById("submit");
sbmit.onclick = function() {
  
  const submitButton = document.getElementById("submit");

  // Выводим сообщение в стандартном окне
  alert("Форма отправлена!");

  // Меняем цвет кнопки
  submitButton.style.backgroundColor = "green";
  setTimeout(() => {
    submitButton.style.backgroundColor = ""; // Возвращаем исходный цвет
  }, 1500);


 }