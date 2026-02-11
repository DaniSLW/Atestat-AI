/* ==== MORE EVENTS ==== */
let more = document.querySelectorAll('.more');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
        more[i].classList.toggle('active');
        let content = more[i].parentNode.querySelector('.content');
        content.classList.toggle('active');
    });
}

/* ==== FADE-IN EVENTS ==== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));