const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submit');

const formData = {};

function submitForm(event) {
    event.preventDefault(); 

    formData.name = document.getElementById('name').value; 
    formData.email = document.getElementById('email').value;
    formData.phone = document.getElementById('phone').value;
    formData.date = document.getElementById('date').value;
    formData.comments = document.getElementById('comments').value;

    // Проверки
    if (!formData.name || !formData.email || !formData.comments) {
        alert('Поля "Имя", "Электронная почта" и "Комментарии" обязательны для заполнения.');
        return;
    }

    if (!/^\d+$/.test(formData.phone)) {
        alert('Поле "Телефон" должно содержать только цифры.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Некорректный формат электронной почты.');
        return;
    }

    formData.printData(); 
}

formData.printData = function() {
    console.log("Имя:", this.name);
    console.log("E-mail:", this.email);
    console.log("Телефон:", this.phone);
    console.log("Дата:", this.date);
    console.log("Комментарии:", this.comments);


};

submitButton.addEventListener('click', submitForm);
