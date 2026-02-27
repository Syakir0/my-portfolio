/* --- Particles Config --- */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ffffff" },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2 },
        "move": { "enable": true, "speed": 1.5 }
    },
    "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
});

/* --- Typewriter Effect --- */
class Typewriter {
    constructor(el, texts, wait = 3000) {
        this.el = el; this.texts = texts; this.txt = ''; this.textIdx = 0; this.isDeleting = false; this.type();
    }
    type() {
        const current = this.textIdx % this.texts.length;
        const fullTxt = this.texts[current];
        this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
        this.el.innerHTML = this.txt;
        let speed = this.isDeleting ? 100 : 200;
        if (!this.isDeleting && this.txt === fullTxt) { speed = 3000; this.isDeleting = true; }
        else if (this.isDeleting && this.txt === '') { this.isDeleting = false; this.textIdx++; speed = 500; }
        setTimeout(() => this.type(), speed);
    }
}

/* --- Global Init --- */
document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter-text');
    if (typewriter) new Typewriter(typewriter, JSON.parse(typewriter.getAttribute('data-text')));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});