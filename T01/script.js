const revealButton = document.querySelector('.reveal-button');
const detailContent = document.querySelector('#detail-content');
const label = revealButton.querySelector('.button-label');
const symbol = revealButton.querySelector('.button-symbol');

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  detailContent.hidden = isOpen;
  label.textContent = isOpen ? '함께 일하는 기준 펼치기' : '함께 일하는 기준 접기';
  symbol.textContent = isOpen ? '+' : '−';
});
