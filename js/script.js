document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    alert(`Бронирование успешно!\nДата заезда: ${checkin}\nДата выезда: ${checkout}\nТип номера: ${roomType}`);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Спасибо, ${name}! Ваше сообщение отправлено.\nМы свяжемся с вами по email: ${email}`);
});

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Параллакс-эффект
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        answer.classList.toggle('active');
    });
});

const detailCards = document.querySelectorAll('.detail-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

detailCards.forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        if (targetElement) {
            // Плавная прокрутка к целевому элементу
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
                block: 'start'      // Прокрутка до начала элемента
            });
        }
    });
});

