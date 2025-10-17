<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const monthlyToggle = document.getElementById('monthly');
    const yearlyToggle = document.getElementById('yearly');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const assessmentCount = document.querySelector('.assessment-count');

    monthlyToggle.addEventListener('click', () => {
        monthlyToggle.classList.add('active');
        yearlyToggle.classList.remove('active');
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
        assessmentCount.textContent = '3 Self assessments';
    });

    yearlyToggle.addEventListener('click', () => {
        yearlyToggle.classList.add('active');
        monthlyToggle.classList.remove('active');
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        assessmentCount.textContent = '40 Self assessments';
    });
=======
document.addEventListener('DOMContentLoaded', () => {
    const monthlyToggle = document.getElementById('monthly');
    const yearlyToggle = document.getElementById('yearly');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const assessmentCount = document.querySelector('.assessment-count');

    monthlyToggle.addEventListener('click', () => {
        monthlyToggle.classList.add('active');
        yearlyToggle.classList.remove('active');
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
        assessmentCount.textContent = '3 Self assessments';
    });

    yearlyToggle.addEventListener('click', () => {
        yearlyToggle.classList.add('active');
        monthlyToggle.classList.remove('active');
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        assessmentCount.textContent = '40 Self assessments';
    });
>>>>>>> d70cbd7ccf61aaa04117428862f04f8b446a3dc3
});