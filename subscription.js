document.addEventListener('DOMContentLoaded', () => {
    const monthlyToggle = document.getElementById('monthly');
    const yearlyToggle = document.getElementById('yearly');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const assessmentCount = document.querySelector('.assessment-count');

    // Initialize animation properties
    let animating = false;
    const animationDuration = 300; // in milliseconds

    // Function to animate price changes
    const animatePriceChange = (show, hide) => {
        if (animating) return;
        animating = true;

        // Fade out current prices
        hide.forEach(price => {
            price.style.opacity = '0';
            setTimeout(() => {
                price.classList.add('hidden');
            }, animationDuration / 2);
        });

        // Fade in new prices
        setTimeout(() => {
            show.forEach(price => {
                price.classList.remove('hidden');
                setTimeout(() => {
                    price.style.opacity = '1';
                }, 50);
            });
            animating = false;
        }, animationDuration / 2);
    };

    monthlyToggle.addEventListener('click', () => {
        if (monthlyToggle.classList.contains('active')) return;
        monthlyToggle.classList.add('active');
        yearlyToggle.classList.remove('active');
        animatePriceChange(monthlyPrices, yearlyPrices);
        assessmentCount.textContent = '3 Self assessments';
    });

    yearlyToggle.addEventListener('click', () => {
        if (yearlyToggle.classList.contains('active')) return;
        yearlyToggle.classList.add('active');
        monthlyToggle.classList.remove('active');
        animatePriceChange(yearlyPrices, monthlyPrices);
        assessmentCount.textContent = '40 Self assessments';
    });
});