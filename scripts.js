function showTabContent(tab) {
    document.querySelectorAll('.tab-content').forEach(function (content) {
        content.style.display = 'none';
    });
    document.getElementById(tab).style.display = 'block';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    showTabContent('projects');
  });

  function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const scrollableText = document.querySelector('.intro');
  
    if (dropdownContent.classList.contains('open')) {
        dropdownContent.classList.remove('open');
        dropdownContent.style.height = '0';
        scrollableText.style.height = '50%';
    } else {
        closeDropdowns();
        dropdownContent.classList.add('open');
        dropdownContent.style.height = 'auto';
        scrollableText.style.height = '30%';
    }
  }
  
  document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(e.target)) {
        closeDropdowns();
    }
  });
  
  function closeDropdowns() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const scrollableText = document.querySelector('.intro');
    if (dropdownContent.classList.contains('open')) {
        dropdownContent.classList.remove('open');
        dropdownContent.style.height = '0';
        scrollableText.style.height = '50%';
    }
  }
  
  let shuffledEls = document.querySelectorAll(".hahaha");
  let duration = 50;
  let framesMax = 7
  
  shuffledEls.forEach((shuffledEl) => {
  let textOrig = shuffledEl.textContent;
  let inter;
  
  shuffledEl.addEventListener("mouseover", (e) => {
    let text = e.currentTarget.textContent;
    let charArr = text.split("");
    let frame = 0;
  
    inter = setInterval(() => {
      if(frame<framesMax){
        let charArrShuff = shuffleArr(charArr);
        shuffledEl.textContent = charArrShuff.join("");
        frame++
      }else{
        clearInterval(inter);
        shuffledEl.textContent = textOrig;
      }
    }, duration);
  
  });
  
  shuffledEl.addEventListener("mouseleave", (e) => {
    e.currentTarget.textContent = textOrig;
    clearInterval(inter);
  });
  });
  
  function shuffleArr(arr) {
  return arr.reduce(
    ([a, b]) => (
      b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
    ),
    [[...arr], []]
  )[1];
  }
  
  function infiniteScroll(column) {
  column.addEventListener('scroll', () => {
    if (column.scrollTop + column.clientHeight >= column.scrollHeight - 5) {
      column.innerHTML += column.innerHTML;
    }  }); }
  document.addEventListener("DOMContentLoaded", function() {
  const column1 = document.getElementById('column-a');
  const column2 = document.getElementById('column-b');
  infiniteScroll(column1);
  infiniteScroll(column2); });
  
document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".project-images");
  const initialImages = Array.from(imageContainer.children);
  const loadMoreImages = () => {
    initialImages.forEach((img) => {
      const newImg = img.cloneNode();
      imageContainer.appendChild(newImg);
    });
};
imageContainer.addEventListener("scroll", () => {
    if (
      imageContainer.scrollTop + imageContainer.clientHeight >=
      imageContainer.scrollHeight - 50
    ) {loadMoreImages();}
  });
});
