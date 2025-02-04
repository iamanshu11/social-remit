const searchInput = document.querySelector(".residency-search-input");
const searchFlag = document.querySelector(".residency-search-flag");
const countryOptions = document.querySelectorAll(".residency-country-option");

// Update input and flag on country selection
countryOptions.forEach(option => {
  option.addEventListener("click", () => {
    const flag = option.getAttribute("data-flag");
    const name = option.getAttribute("data-name");

    // Update the search input and flag
    searchInput.value = name;
    searchFlag.src = flag;
    searchFlag.classList.remove("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const nationalityInput = document.getElementById('nationality-drop-input');
  const nationalityList = document.getElementById('nationality-drop-list');
  const nationalityFlag = document.getElementById('nationality-flag');
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownIcon = document.getElementById('dropdown-icon');

  // Function to toggle dropdown and icon rotation
  function toggleDropdown() {
    nationalityList.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180');
  }

  // Show or hide the dropdown when input or icon is clicked
  nationalityInput.addEventListener('click', toggleDropdown);
  dropdownButton.addEventListener('click', toggleDropdown);

  // Select nationality and update input/flag
  window.selectNationality = function (name, flagPath) {
    nationalityInput.value = name;
    nationalityFlag.src = flagPath;
    nationalityFlag.classList.remove('hidden');
    nationalityList.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  };

  // Filter nationalities based on input
  nationalityInput.addEventListener('input', function () {
    const filter = nationalityInput.value.toLowerCase();
    const items = nationalityList.querySelectorAll('li');

    items.forEach(item => {
      const text = item.textContent || item.innerText;
      item.style.display = text.toLowerCase().includes(filter) ? "flex" : "none";
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!nationalityList.contains(event.target) && event.target !== nationalityInput && event.target !== dropdownIcon && event.target !== dropdownButton) {
      nationalityList.classList.add('hidden');
      dropdownIcon.classList.remove('rotate-180');
    }
  });
});

const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Toggle dropdown visibility
  dropdown.classList.toggle('hidden');

  // Adjust the icon's rotation
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}

function selectCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('selected-flag');
  const currencyElement = document.getElementById('selected-currency');
  const dropdown = document.getElementById('currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function selectRecipientCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('recipient-flag');
  const currencyElement = document.getElementById('recipient-currency');
  const dropdown = document.getElementById('recipient-currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function filterDropdown(listId, searchId) {
  const dropdown = document.getElementById(listId);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');
  const searchInput = document.getElementById(searchId).value.toLowerCase();
  const items = dropdown.querySelectorAll('li');

  // Filter dropdown items
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchInput) ? '' : 'none';
  });

  // Keep dropdown icon rotated while searching
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}


let activeCategory = 'money'; // Default active category

function showCategory(category) {
  const categories = document.querySelectorAll('.faq-category');
  categories.forEach(cat => {
    if (cat.dataset.category === category) {
      cat.classList.remove('hidden');
    } else {
      cat.classList.add('hidden');
    }
  });

  // Update active button styling
  document.querySelectorAll('.filter-button').forEach(button => {
    button.classList.remove('bg-blue-500', 'text-white');
    button.classList.add('bg-gray-200');
  });
  const activeButton = document.getElementById(category + '-button');
  activeButton.classList.add('bg-blue-500', 'text-white');
  activeButton.classList.remove('bg-gray-200');

  activeCategory = category;
}

function toggleFAQ(faq) {
  const content = document.getElementById(faq);
  const arrow = document.querySelector(`[data-arrow="${faq}"]`);
  content.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

window.onload = () => {
  showCategory(activeCategory);
};



function togglePassword(fieldId, imgId) {
  const input = document.getElementById(fieldId);
  const eyeIcon = document.getElementById(imgId);

  if (input.type === 'password') {
    input.type = 'text';
    eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    </svg>`;
  } else {
    input.type = 'password';
    eyeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
    </svg>`;
  }
}






// Toggle the country code list dropdown
function toggleCountryCodeList(event) {
  event.stopPropagation();
  const countryCodeList = document.getElementById('country-code-list');
  countryCodeList.classList.toggle('hidden');
}

// Filter country codes based on search input
function filterCountryCodes(event) {
  const searchValue = event.target.value.toLowerCase();
  const options = document.querySelectorAll('#country-code-options li');

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.classList.remove('hidden');
    } else {
      option.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Toggle country code dropdown
  document.querySelectorAll('.country-code-btn').forEach(button => {
    button.addEventListener('click', event => {
      const dropdown = event.currentTarget.closest('.phone-input, .phone-input-old').querySelector('.country-code-list');
      dropdown.classList.toggle('hidden');
    });
  });

  // Select country code
  document.querySelectorAll('.country-option').forEach(option => {
    option.addEventListener('click', event => {
      const parent = event.currentTarget.closest('.phone-input, .phone-input-old');
      const flag = parent.querySelector('.phone-flag');
      const code = parent.querySelector('.country-code');

      const flagSrc = event.currentTarget.getAttribute('data-flag');
      const countryCode = event.currentTarget.getAttribute('data-code');

      flag.src = flagSrc;
      code.textContent = countryCode;

      // Close dropdown after selection
      const dropdown = parent.querySelector('.country-code-list');
      dropdown.classList.add('hidden');
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', event => {
    document.querySelectorAll('.country-code-list').forEach(dropdown => {
      if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
        dropdown.classList.add('hidden');
      }
    });
  });
});




// *********** slider  **************************** 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
      1280: {
          slidesPerView: 4,
      },
  },
});




// *********** slider  **************************** 
document.addEventListener("DOMContentLoaded", function() {
  // Right to Left Swiper
  const swiperRTL = new Swiper('.swiper-container-rtl', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    rtl: true,  // Ensures movement from right to left
    autoplay: {
        delay: 0, // Continuous effect
        disableOnInteraction: false
    },
    speed: 3000,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

  // Left to Right Swiper
  const swiperLTR = new Swiper('.swiper-container-ltr', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    rtl: false,  // Ensures default movement from left to right
    autoplay: {
        delay: 0, // Continuous effect
        disableOnInteraction: false
    },
    speed: 3000,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

  // Event listeners for hover to pause/resume autoplay
  const swiperContainerRTL = document.querySelector('.swiper-container-rtl');
  swiperContainerRTL.onmouseenter = () => swiperRTL.autoplay.stop();
  swiperContainerRTL.onmouseleave = () => swiperRTL.autoplay.start();

  const swiperContainerLTR = document.querySelector('.swiper-container-ltr');
  swiperContainerLTR.onmouseenter = () => swiperLTR.autoplay.stop();
  swiperContainerLTR.onmouseleave = () => swiperLTR.autoplay.start();
});



// *********** box-input  **************************** 
function moveFocus(event, inputIndex) {
  const inputs = document.querySelectorAll('#pin-input-container input');
  if (event.inputType === 'deleteContentBackward') {
      // Focus previous input if exists when backspace is pressed
      if (inputIndex > 0) inputs[inputIndex - 1]?.focus();
  } else {
      // Move focus to next input if character is entered and not a backspace
      if (event.target.value.length === 1 && inputIndex < inputs.length - 1) {
          inputs[inputIndex + 1].focus();
      }
  }
}

// *********** filter for Account  **************************** 
function showForm(formId, element) {
  // Hide all forms
  document.getElementById('personalForm').classList.add('hidden');
  document.getElementById('businessForm').classList.add('hidden');

  // Remove active style from all links
  document.querySelectorAll('.flex > a').forEach(a => {
      a.children[0].style.backgroundColor = ''; // Reset background color
  });

  // Show the selected form and add active style
  document.getElementById(formId).classList.remove('hidden');
  element.children[0].style.backgroundColor = '#8B1EC4'; // Custom purple color for active state
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  const personalLink = document.getElementById('personalLink');
  showForm('personalForm', personalLink);
});



// *********** Payment Method **************************** 
function togglePaymentMethodDropdown(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectPaymentMethod(code, flagPath) {
  const codeElement = document.getElementById('payment-method-code');
  const flagElement = document.getElementById('payment-method-flag');
  const icon = document.getElementById('payment-method-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('payment-method-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the payment method dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});

// *********** Account Transfer **************************** 
function toggleAccountTransferDropdown(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectAccountTransferMethod(code, flagPath) {
  const codeElement = document.getElementById('account-transfer-code');
  const flagElement = document.getElementById('account-transfer-flag');
  const icon = document.getElementById('account-transfer-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('account-transfer-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the account transfer dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});

// *********** Countable **************************** 

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + "+";
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const userCount = document.getElementById('userCount');
  if (userCount) {
      animateValue(userCount, 0, 5000000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const visaCount = document.getElementById('visaCount');
  if (visaCount) {
      animateValue(visaCount, 0, 1000000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const companyCount = document.getElementById('companyCount');
  if (companyCount) {
      animateValue(companyCount, 0, 60000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const transactionCount = document.getElementById('transactionCount');
  if (transactionCount) {
      animateValue(transactionCount, 0, 250000, 8000); // Increased duration from 4000ms to 8000ms
  }
});


// *********** Card-tilt **************************** 
var cards = document.querySelectorAll('.card-tilt');

cards.forEach(card => {
  var mouseHover = false;
  var mousePosition = { x: 0, y: 0 };
  var cardSize = { width: 0, height: 0 };
  var SCALE_X = 8;
  var SCALE_Y = 10;

  card.onblur = function() {
    mouseHover = false;
  };

  card.onfocus = function() {
    mouseHover = true;
  };

  card.onmousemove = function(e) {
    if (!mouseHover) return;
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mousePosition = { x, y };
    cardSize = {
      width: card.offsetWidth || 0,
      height: card.offsetHeight || 0,
    };
    card.style.transform = `perspective(1000px) rotateX(${
      (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
    }deg) rotateY(${
      (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
    }deg) translateZ(10px)`;
  };

  card.onmouseout = function() {
    mouseHover = false;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  card.onmouseover = function() {
    mouseHover = true;
  };
});


function showForm(formType) {
  var smsForm = document.getElementById('smsForm');
  var emailForm = document.getElementById('emailForm');
  if (formType == 'sms') {
      smsForm.style.display = 'block';
      emailForm.style.display = 'none';
  } else if (formType == 'email') {
      emailForm.style.display = 'block';
      smsForm.style.display = 'none';
  }
}

AOS.init();

function showFormfile(formTypefile) {
  var smsFormfile = document.getElementById('smsFormfile');
  var emailFormfile = document.getElementById('emailFormfile');
  if (formTypefile == 'smsfile') {
      smsFormfile.style.display = 'block';
      emailFormfile.style.display = 'none';
  } else if (formTypefile == 'emailfile') {
      emailFormfile.style.display = 'block';
      smsFormfile.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
});

// Add event listener for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const lightModeButtonMobile = document.getElementById('light-mode-mobile');
  const darkModeButtonMobile = document.getElementById('dark-mode-mobile');

  // Function to toggle dark mode based on preference
  function toggleDarkMode(shouldAdd) {
    document.documentElement.classList.toggle('dark', shouldAdd);
    if (shouldAdd) {
      darkModeButtonMobile.style.backgroundColor = '#00A1CC'; // Dark mode active color
      lightModeButtonMobile.style.backgroundColor = 'transparent'; // Light mode inactive color
    } else {
      lightModeButtonMobile.style.backgroundColor = '#00A1CC'; // Light mode active color
      darkModeButtonMobile.style.backgroundColor = 'transparent'; // Dark mode inactive color
    }
  }

  // Check the current preference on load
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  toggleDarkMode(prefersDarkMode);

  // Event listeners for the buttons
  lightModeButtonMobile.addEventListener('click', function () {
    toggleDarkMode(false); // Force light mode
  });

  darkModeButtonMobile.addEventListener('click', function () {
    toggleDarkMode(true); // Force dark mode
  });
});

// Listen for changes in the system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  toggleDarkMode(event.matches);
});




function toggle(detailId) {
  const allDetailBoxes = document.querySelectorAll('.group .detail-box');
  const allButtons = document.querySelectorAll('.group > div:first-child');

  // Hide all boxes and reset buttons
  allDetailBoxes.forEach(box => {
    box.classList.add('hidden');
    box.previousElementSibling.classList.remove('bg-[#00A1CC]', 'text-white', 'text-xl'); // Remove active background and text size
    box.previousElementSibling.classList.add('bg-[#EFF9FB]', 'text-[#428BC1]', 'text-base'); // Add inactive background and default text size
  });

  // Handle the current box
  const clickedElement = document.getElementById(detailId);
  const buttonElement = clickedElement.previousElementSibling; // Button is just before the detail box

  if (clickedElement.classList.contains('hidden')) {
    clickedElement.classList.remove('hidden');
    buttonElement.classList.add('bg-[#00A1CC]', 'text-white', 'text-xl'); // Apply active background and larger text size
    buttonElement.classList.remove('bg-[#EFF9FB]', 'text-[#428BC1]', 'text-base');
  } else {
    clickedElement.classList.add('hidden');
    buttonElement.classList.remove('bg-[#00A1CC]', 'text-white', 'text-xl');
    buttonElement.classList.add('bg-[#EFF9FB]', 'text-[#428BC1]', 'text-base');
  }
}

// Activate the second box on page load
document.addEventListener('DOMContentLoaded', function () {
  toggle('detail-box2');
});





document.addEventListener("DOMContentLoaded", function() {
  const flags = document.querySelectorAll(".flag-div");
  // Initially hide all flags except the first three
  for (let i = 2; i < flags.length; i++) {
      flags[i].style.display = 'none';
  }

  // Add click event listener to the button
  document.getElementById('viewAllButton').addEventListener('click', function() {
      for (let i = 3; i < flags.length; i++) {
          flags[i].style.display = flags[i].style.display === 'none' ? '' : 'none';
      }
  });
});