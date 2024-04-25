export function showVisibleEl(classEl) {
    const visibileEl = document.querySelector(`.${classEl}`);

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        visibileEl.classList.add('visible');
        };
    });
    });

    observer.observe(visibileEl);
};