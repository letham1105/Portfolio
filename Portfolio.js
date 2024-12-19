/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/* -- SKILL BOX -- */
sr.reveal('.skill-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

function addRecommendation() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const recommendationInput = document.getElementById('recommendation-text');
    const recommendationsDiv = document.querySelector('.recommendations');

    // Kiểm tra xem các trường có trống không
    if (!nameInput.value || !emailInput.value || !recommendationInput.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Tạo nhãn mới cho đề xuất
    const newLabel = document.createElement('label');
    newLabel.innerText = `${nameInput.value}: ${recommendationInput.value}`;

    // Thêm nhãn vào phần đề xuất
    recommendationsDiv.appendChild(newLabel);

    // Xóa các trường nhập sau khi gửi
    nameInput.value = '';
    emailInput.value = '';
    recommendationInput.value = '';

    // Hiển thị thông báo xác nhận
    showPopup(true); // Show the popup for confirmation
}

// Function to show the popup
function showPopup(show) {
    const popup = document.getElementById('popup1');
    if (show) {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // Display for 3 seconds
    } else {
        popup.style.display = 'none';
    }
}


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        }  else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)