// Часть 1: Обработчики событий

// 1. Обработчик клика на заголовок H1
const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
  alert('Вы кликнули на заголовок - так держать!');
});

const buttonplace = document.querySelector('h2.practiceh2');

// 2. Кнопка для переключения тем практик
const secondSemesterButton = document.createElement('button');
//button.classList.add('btnsee');
secondSemesterButton.textContent = 'Посмотреть практики второго семестра';
buttonplace.appendChild(secondSemesterButton); // Добавляем кнопку на страницу

const practiceTable = document.querySelector('.practice table');
const secondSemesterPractices = [
  "Базовое бэкенд-приложение",
  "HTTP-запросы",
  "JSON и работа с ним",
  "HTTP-ответы",
  "Проектирование API",
  "Роутинг и его настройка",
  "NoSQL базы данных",
  "Обеспечение авторизации и доступа пользователей",
  "Работа сторонних сервисов уведомления и авторизации",
  "Основы ReactJS",
  "Работа с компонентами динамической DOM",
  "Использование хуков в React",
  "Основы микросервисной архитектуры",
  "Разработка классических модулей веб-приложений",
  "Разработка классических модулей веб-приложений"
];

secondSemesterButton.addEventListener('click', () => {
  const tbody = practiceTable.querySelector('tbody');
  tbody.innerHTML = ''; // Очищаем текущие данные

  secondSemesterPractices.forEach((practice, index) => {
    const row = tbody.insertRow();
    const numCell = row.insertCell();
    const practiceCell = row.insertCell();
    const checkCell = row.insertCell();
    const checkCell2 = row.insertCell();


    numCell.textContent = index + 1;
    practiceCell.textContent = practice;
    checkCell.innerHTML = '<input type="checkbox">';
 checkCell2.innerHTML = '<input type="checkbox">';
  });
});



// 3. Обработчики для фотографии студента 
const studentPhoto = document.getElementById('student-photo'); 
if (studentPhoto) {
  let initialWidth = studentPhoto.offsetWidth;
  let initialHeight = studentPhoto.offsetHeight;

  studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transition = 'transform 0.5s ease ';
  studentPhoto.style.transform = 'rotate(360deg)';
  });

  studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transform = 'rotate(0)';
  });





  studentPhoto.addEventListener('click', () => {
   
    studentPhoto.src = 'snape.jpg'; 
  });

  // 4. Обработчик dblclick на фотографии студента
  studentPhoto.addEventListener('dblclick', () => {
    alert('Не налегай, у меня не так много любимых преподавателей');
  });
} else {
    console.error("Фотография студента не найдена. Проверьте id элемента.");
}




