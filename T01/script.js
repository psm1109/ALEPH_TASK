const revealButton = document.querySelector('.reveal-button');
const detailContent = document.querySelector('#detail-content');
const label = revealButton.querySelector('.button-label');
const symbol = revealButton.querySelector('.button-symbol');

const introRotator = document.querySelector('.intro-rotator');
const motionToggle = document.querySelector('.intro-motion-toggle');
const motionLabel = motionToggle.querySelector('.motion-label');
const motionSymbol = motionToggle.querySelector('.motion-symbol');

motionToggle.addEventListener('click', () => {
  const isPaused = introRotator.classList.toggle('is-paused');
  motionToggle.setAttribute('aria-pressed', String(isPaused));
  motionLabel.textContent = isPaused ? '애니메이션 재생' : '애니메이션 멈춤';
  motionSymbol.textContent = isPaused ? '▶' : 'Ⅱ';
});

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  detailContent.hidden = isOpen;
  label.textContent = isOpen ? '함께 일하는 기준 펼치기' : '함께 일하는 기준 접기';
  symbol.textContent = isOpen ? '+' : '−';
});

const galleryTrigger = document.querySelector('.learning-gallery-trigger');
const galleryModal = document.querySelector('#learning-gallery');
const galleryImage = document.querySelector('#gallery-image');
const galleryCaption = document.querySelector('#gallery-caption');
const galleryCloseButtons = document.querySelectorAll('[data-gallery-close]');
const previousButton = document.querySelector('[data-gallery-prev]');
const nextButton = document.querySelector('[data-gallery-next]');
const galleryImages = Array.from({ length: 6 }, (_, index) => `images/${index + 1}.jpg`);
let activeImageIndex = 0;
let lastFocusedElement;

const showGalleryImage = (index) => {
  activeImageIndex = (index + galleryImages.length) % galleryImages.length;
  const imageNumber = activeImageIndex + 1;
  galleryImage.src = galleryImages[activeImageIndex];
  galleryImage.alt = `학습 기록 ${imageNumber}`;
  galleryCaption.innerHTML = `<strong>${String(imageNumber).padStart(2, '0')}</strong> / ${String(galleryImages.length).padStart(2, '0')}`;
};

const closeGallery = () => {
  galleryModal.hidden = true;
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
};

galleryTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  lastFocusedElement = document.activeElement;
  showGalleryImage(0);
  galleryModal.hidden = false;
  document.body.style.overflow = 'hidden';
  galleryModal.querySelector('.gallery-close').focus();
});

galleryCloseButtons.forEach((button) => button.addEventListener('click', closeGallery));
previousButton.addEventListener('click', () => showGalleryImage(activeImageIndex - 1));
nextButton.addEventListener('click', () => showGalleryImage(activeImageIndex + 1));

document.addEventListener('keydown', (event) => {
  if (galleryModal.hidden) return;
  if (event.key === 'Escape') closeGallery();
  if (event.key === 'ArrowLeft') showGalleryImage(activeImageIndex - 1);
  if (event.key === 'ArrowRight') showGalleryImage(activeImageIndex + 1);
});
