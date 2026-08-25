const revealButton = document.querySelector('.reveal-button');
const detailContent = document.querySelector('#detail-content');
const label = revealButton.querySelector('.button-label');
const symbol = revealButton.querySelector('.button-symbol');
const motionButton = document.querySelector('.motion-button');
const motionStatus = document.querySelector('#motion-status');

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  detailContent.hidden = isOpen;
  label.textContent = isOpen ? '함께 일하는 기준 펼치기' : '함께 일하는 기준 접기';
  symbol.textContent = isOpen ? '+' : '−';
});

motionButton.addEventListener('click', () => {
  const isReduced = motionButton.getAttribute('aria-pressed') === 'true';
  document.body.classList.toggle('reduce-motion', !isReduced);
  motionButton.setAttribute('aria-pressed', String(!isReduced));
  motionButton.textContent = isReduced ? '움직임 줄이기 켜기' : '움직임 줄이기 끄기';
  motionStatus.textContent = isReduced ? '시스템 설정을 따르고 있습니다.' : '이 페이지의 움직임을 줄였습니다.';
});
