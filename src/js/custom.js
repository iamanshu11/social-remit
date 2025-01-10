"use strict";


  


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




