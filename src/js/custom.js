"use strict";

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<h3 class='text-lg text-red-600 font-bold'>🚀 Launched!</h3>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown(); // Run immediately once
    const timer = setInterval(updateCountdown, 1000);
}

// ✅ Set a future target launch date (Change this as needed)
const launchDate = new Date("March 10, 2025 00:00:00").getTime();
startCountdown(launchDate);

(function($) {

    "use strict";

    $(".card").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: true,
        maxGlare: 0.2,
        scale: 1.04
    });

}(jQuery));


function toggleDropdown() {
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.toggle('hidden');
}

function filterCountries() {
    const input = document.getElementById('nationality-drop-input').value.toLowerCase();
    const listItems = document.querySelectorAll('.dropdown-item');

    listItems.forEach(item => {
        const country = item.getAttribute('data-country').toLowerCase();
        if (country.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectNationality(countryName, flagUrl) {
    const input = document.getElementById('nationality-drop-input');
    const flag = document.getElementById('nationality-flag');

    input.value = countryName;
    flag.src = flagUrl;
    flag.classList.remove('hidden'); // Show the flag

    // Hide the dropdown after selection
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.add('hidden');
}