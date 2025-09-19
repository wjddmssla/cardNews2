const card = document.querySelector('.cardnews');
    const slides = card.querySelectorAll('.slides img');
    const leftBtn = card.querySelector('.arrow.left');
    const rightBtn = card.querySelector('.arrow.right');
    let index = 0;

    function updateSlide() {
      slides.forEach((img, i) => {
        img.style.transform = `translate(-50%, -50%) translateX(${(i - index) * 100}%)`;
      });

      leftBtn.style.display = index === 0 ? 'none' : 'block';
      rightBtn.style.display = index === slides.length -1 ? 'none' : 'block';
    }

    leftBtn.addEventListener('click', () => {
      if(index > 0) {
        index--;
        updateSlide();
      }
    });

    rightBtn.addEventListener('click', () => {
      if(index < slides.length -1) {
        index++;
        updateSlide();
      }
    });

    // 초기 상태
    updateSlide();