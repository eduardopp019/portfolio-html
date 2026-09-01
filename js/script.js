const hero = document.querySelector('.hero');

document.querySelectorAll('[data-name]').forEach((line) => {
  const letters = [...line.dataset.name];
  line.textContent = '';
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.className = 'name-letter';
    span.style.setProperty('--letter', index);
    span.textContent = letter;
    line.appendChild(span);
  });
});

if (window.matchMedia('(pointer: fine)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const area = hero.getBoundingClientRect();
    hero.style.setProperty('--mouse-x', `${event.clientX - area.left}px`);
    hero.style.setProperty('--mouse-y', `${event.clientY - area.top}px`);
    hero.style.setProperty('--light-opacity', '1');
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--light-opacity', '.45');
  });
}

// whatsapp


const numero = "5519987677342";
const mensagem = "Olá Eduardo! Vi seu portfólio e gostaria de conversar com você.";

document.getElementById("whatsapp").href =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;