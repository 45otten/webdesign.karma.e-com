// toggle button 
// burger=document.querySelector('.burger')
// navbarItems=document.querySelector('.navbar')
// nav=document.querySelector('.nav')

// burger.addEventListener('click',()=>{
//     navbarItems.classList.toggle('h-class')
//     nav.classList.toggle('v-class')
// })
// toggle button 

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    loop: true,
  },
});

let countdown = new Date("Jan 20,2024 00:00:00:00").getTime();
let Gatto = setInterval(function () {
  let time = new Date();
  let resultedtime = countdown - time;

  let day = Math.floor(resultedtime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((resultedtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((resultedtime % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((resultedtime % (1000 * 60)) / (1000));

  day = addzero(day);
  hours = addzero(hours);
  min = addzero(min);
  sec = addzero(sec);


  document.getElementById('day').innerHTML = day;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('min').innerHTML = min;
  document.getElementById('sec').innerHTML = sec;
  addzero();
}, 1000)

function addzero(formatzero) {
  formatzero = formatzero.toString();
  return formatzero.length < 2 ? "0" + formatzero : formatzero;
}