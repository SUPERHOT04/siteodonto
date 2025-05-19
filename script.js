function showTime() {
document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
showTime();
}, 1000);
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
});
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
});
 
showItem(currentIndex);
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector('.navbar').addEventListener('click', function() {
  this.classList.toggle('expanded');
});

document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('expanded');
});
