// Add 'main' class to body for styling
document.body.classList.add('main');

// Photos array - replace these with your girlfriend's photos
const photos = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
];

// Lyrics or message (each letter will be curved)
const lyricsText = "You are my sunshine, my only sunshine";

const name = localStorage.getItem('gfName') || 'Love';

document.getElementById('nameDisplay').textContent = `For ${name}`;

// Slideshow setup
const slideshow = document.getElementById('slideshow');

photos.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  if (i === 0) img.classList.add('active');
  slideshow.appendChild(img);
});

let currentIndex = 0;
setInterval(() => {
  const images = slideshow.querySelectorAll('img');
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}, 4000);

// Play background music on first user interaction (click)
const music = document.getElementById('bgMusic');
music.volume = 0.4;

window.addEventListener('click', () => {
  music.play();
}, { once: true });

// Curved lyrics text
const lyricsDiv = document.getElementById('lyrics');
lyricsDiv.innerHTML = '';
const radius = 120;
const letters = lyricsText.split('');
const angleStep = 180 / (letters.length - 1); // curve 180 degrees

letters.forEach((letter, i) => {
  const span = document.createElement('span');
  span.textContent = letter;
  const angle = -90 + i * angleStep;
  span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
  lyricsDiv.appendChild(span);
});
