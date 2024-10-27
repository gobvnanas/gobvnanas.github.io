
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
    "> Nguyen Trang is a graphic / brand designer based in HCMC, specializing in brand identity design. her portfolio, gobvnanas, showcases her selected projects.",
    ];
function typeWriter(text, i, fnCallback) {
if (i < (text.length)) {
document.querySelector("p").innerHTML = text.substring(0, i+1) +'<em aria-hidden="true"></em>';

setTimeout(function() {
    typeWriter(text, i + 1, fnCallback)
}, 100);
}
else if (typeof fnCallback == 'function') {
setTimeout(fnCallback, 00);
}
}
function StartTextAnimation(i) {
if (typeof dataText[i] == 'undefined'){
    setTimeout(function() {
        StartTextAnimation(0);
    }, 20000);
}
if (i < dataText[i].length) {
typeWriter(dataText[i], 0, function(){
   StartTextAnimation(i + 1);
});
}
}
StartTextAnimation(0);
});


let activeFilters = [];

function filterImages() {
    let images = document.querySelectorAll('.filter');

    images.forEach(function(image) {
        if (activeFilters.length === 0 || activeFilters.includes('all')) {
            image.style.display = 'block';
        } else {
            let imageClasses = Array.from(image.classList);
            let match = activeFilters.some(filter => imageClasses.includes(filter));

            image.style.display = match ? 'block' : 'none';
        }
    });
}

document.querySelectorAll('.dropdown-content a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let filter = this.dataset.filter;

        if (filter === 'all') {
            activeFilters = ['all'];
        } else {
            let filterIndex = activeFilters.indexOf(filter);

            if (filterIndex > -1) {
                activeFilters.splice(filterIndex, 1);
            } else {
                activeFilters = activeFilters.filter(f => f !== 'all');
                activeFilters.push(filter);
            }
        }
        document.querySelectorAll('.dropdown-content a').forEach(function(item) {
            item.classList.remove('active');
        });
        activeFilters.forEach(f => {
            document.querySelector(`[data-filter="${f}"]`).classList.add('active');
        });
        filterImages();
    });
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



const projectsData = {
  "stan music awards": {
    year: "2024",
    type: "branding, visual identity, copywriting",
    images: [
      "/assets/1.jpg",
      "/assets/2.jpg",
      "/assets/3.jpg"
    ]
  },
  "ticos coffee": {
    year: "2024",
    type: "logo design, branding, visual identity, copywriting",
    images: [
      "/assets/4.jpg",
      "/assets/5.jpg"
    ]
  },
  "del luna decor": {
    year: "2022",
    type: "web design",
    images: [
      "/assets/6.jpg",
      "/assets/7.jpg"
    ]
  },
  "not just a label": {
    year: "2021",
    type: "ecommerce design",
    images: [
      "/assets/8.jpg",
      "/assets/9.jpg"
    ]
  },
  "project five": {
    year: "2020",
    type: "graphic design, campaigns",
    images: [
      "/assets/13.jpg",
      "/assets/15.jpg"
    ]
  }
};

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelector('.image-grid').style.display = 'none';
    document.querySelector('.project-details').style.display = 'flex';

    const projectName = this.querySelector('.project-name').textContent;
    const projectData = projectsData[projectName];

    document.querySelector('.project-info').innerHTML = `
      <p>>> ${projectName}</p>
      <p>type: ${projectData.type}</p>
      <p>year: ${projectData.year}</p>
    `;

    const projectImagesContainer = document.querySelector('.project-images');
    projectImagesContainer.innerHTML = '';

    projectData.images.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = projectName;
      img.style.border = '1px solid black';
      projectImagesContainer.appendChild(img);
    });
  });
});
