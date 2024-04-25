// burger menu

const burger = document.querySelector('.burger');
const burger_navigation = document.querySelector('.burger_navigation');
const body = document.querySelector('body');

const header = document.querySelector('.header');

if (window.innerWidth > 1000) {
  header.style.backgroundColor = 'transparent';
} else if (window.innerWidth <= 1000) {
    header.style.backgroundColor = '#1F1F1F';
}

burger.addEventListener('click', (e) => {
    burger_navigation.classList.toggle('active');
    burger.classList.toggle('open');
    body.classList.toggle('active');
})

// function toggleMenu() {
//     burger_navigation.classList.remove('active');
//     burger.classList.toggle('open');
// }


//toggle menu footer

const toggles = document.querySelectorAll('.toggle');
const triangles = document.querySelectorAll('.triangle-click');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const content = toggle.nextElementSibling;
        const triangle = e.target.querySelector('.triangle-click');
        if (content.classList.contains('hidden')) {
            content.style.display = 'flex';
            content.classList.remove('hidden');
            triangle.style.transform = 'rotate(180deg)';
            content.style.paddingTop = '10px';
            content.style.maxHeight = content.scrollHeight + 'px'; 
        } else {
            content.classList.add('hidden');
            triangle.style.transform = 'rotate(90deg)';
            content.style.paddingTop = '0px';
            content.style.maxHeight = '0';
        }
    });
});

//topScrollButton

let isScrollingUp = false; // Флаг для определения направления прокрутки

function createIntersectionObserver(selector) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("scrollToTopBtn").classList.add("show");
          header.style.position = 'fixed';
          header.style.width = '100%';
          header.style.zIndex = '20';
          if (window.innerWidth > 1000) {
            header.style.backgroundColor = '#fff';
          } else {
            header.style.backgroundColor = '##1F1F1F';
          }
        } else {
          if (isScrollingUp) {
            document.getElementById("scrollToTopBtn").classList.remove("show");
            header.style.position = 'static';
            if (window.innerWidth > 1000) {
              header.style.backgroundColor = 'transparent';
            } else {
              header.style.backgroundColor = '##1F1F1F';
            }
          }
        }
      });
    }, );
  
    const target = document.querySelector(selector);
    if (target && target.style.display !== "none") {
      observer.observe(target);
    } else {
      return;
    }
}
  
window.addEventListener("scroll", function() {
    isScrollingUp = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
});
  
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });  
});
  
const observeAttribute = body.getAttribute('data-observe');
const observeArr = observeAttribute.split(',');

observeArr.forEach((item) => {
  createIntersectionObserver(`.${item}`);
});

// createIntersectionObserver(".you_get");
// createIntersectionObserver(".you_get-desktop");
// createIntersectionObserver(".you_get-mobile");
// createIntersectionObserver(".more");

