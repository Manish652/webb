document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-container');
    const submitBtn = document.getElementById('submitBtn');

    function validateAndSubmit() {
        let name = document.getElementById('name').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;
        let guests = document.getElementById('guests').value;

        if (name === '' || phone === '' || date === '' || time === '' || guests === '') {
            alert('Please fill in all fields.');
            return;
        }

        
        alert('Booking successful!');

        
        form.reset();

        
    }

    submitBtn.addEventListener('click', validateAndSubmit);
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});



function showMenuSection(sectionId) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    showMenuSection('appetizers');
});


