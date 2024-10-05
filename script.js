
function showTabContent(tab) {
    
    document.querySelectorAll('.tab-content').forEach(function (content) {
        content.style.display = 'none';
    });

    document.getElementById(tab).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    showTabContent('home');
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

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ 
      "> tèn tén ten là một tổ hợp thiết kế sáng tạo đa lĩnh vực — nơi những bằng hữu cùng nhau làm việc và sinh hoạt tại Thành phố Hồ Chí Minh.", 
      "> Với mong muốn lắng nghe tường tận tâm ý, chúng tôi đồng hành cùng khách hàng tìm đến giải pháp hiệu quả nhất trong các lĩnh vực dịch vụ, nghiên cứu và tư vấn chiến lược, xây dựng thương hiệu để tạo ra các sản phẩm không chỉ dừng lại ở phần thị giác mà còn có ý nghĩa cô đọng.",  
      "> Your practice spans many different design disciplines — graphic, interaction, brand, product, data viz, motion — and seems to seamlessly fuse them together in a way that feels both brand new yet coherent and pragmatic. How do you think about these different disciplines when it comes to your work, and is making a distinction between these practices important?"
      ];
  function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
  document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

  setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
  }, 100);
  }
  else if (typeof fnCallback == 'function') {
  setTimeout(fnCallback, 700);
  }
  }
  function StartTextAnimation(i) {
  if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
          StartTextAnimation(0);
      }, 5000);
  }
  if (i < dataText[i].length) {
  typeWriter(dataText[i], 0, function(){
     StartTextAnimation(i + 1);
  });
  }
  }
  StartTextAnimation(0);
  });

function infiniteScroll(column) {
  column.addEventListener('scroll', () => {
    if (column.scrollTop + column.clientHeight >= column.scrollHeight - 5) {
      column.innerHTML += column.innerHTML;
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const column1 = document.getElementById('column-a');
  const column2 = document.getElementById('column-b');

  infiniteScroll(column1);
  infiniteScroll(column2);
});

function setViewportHeight() {
        // Lấy chiều cao thực tế của cửa sổ hiển thị (trừ đi thanh công cụ nếu có)
        const viewportHeight = window.innerHeight;
        
        // Áp dụng chiều cao thực tế này cho phần tử .column-left
        document.querySelector('.column-left').style.height = `${viewportHeight}px`;
    }

    // Gọi hàm khi tải trang hoặc khi thay đổi kích thước cửa sổ
    window.addEventListener('load', setViewportHeight);
    window.addEventListener('resize', setViewportHeight);







