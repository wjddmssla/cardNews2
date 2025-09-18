const tabs = document.querySelectorAll('.tab-btn');
const cardnews = document.querySelectorAll('.cardnews');

// 각 카드뉴스에 필요한 속성 저장
cardnews.forEach(card => {
  card.slides = card.querySelectorAll('.slides img');
  card.leftBtn = card.querySelector('.arrow.left');
  card.rightBtn = card.querySelector('.arrow.right');
  card.index = 0;
});

// updateSlide 함수
function updateSlide(card) {
  card.slides.forEach((img, i) => {
    img.style.transform = `translateX(-${card.index * 100}%)`;
  });

  // 화살표 상태
  card.leftBtn.style.display = (card.index === 0) ? 'none' : 'block';
  card.rightBtn.style.display = (card.index === card.slides.length - 1) ? 'none' : 'block';
}

// 탭 클릭 이벤트
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.target;
    cardnews.forEach(c => c.classList.remove('active'));
    const activeCard = document.querySelector(`.${target}`);
    activeCard.classList.add('active');

    // 슬라이드 첫 페이지로 초기화
    activeCard.index = 0;
    updateSlide(activeCard);
  });
});

// 화살표 클릭 이벤트
cardnews.forEach(card => {
  card.leftBtn.addEventListener('click', () => {
    if (card.index > 0) {
      card.index--;
      updateSlide(card);
    }
  });

  card.rightBtn.addEventListener('click', () => {
    if (card.index < card.slides.length - 1) {
      card.index++;
      updateSlide(card);
    }
  });

  // 초기 상태
  updateSlide(card);
});
