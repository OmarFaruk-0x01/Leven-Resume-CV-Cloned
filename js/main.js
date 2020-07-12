window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

document.querySelector(".navBtn").addEventListener("click", (e) => {
  
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector(".navBtn").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("open");
});

if (window.innerWidth < 1000){
    document.querySelectorAll('.menu-list > li').forEach(li => {
        // a.preventDefault(0)
        li.addEventListener('click', (e) => {
            li.querySelector('.menu-list-sub').classList.toggle('open')
            li.querySelector('a').addEventListener('click', e => {
              e.preventDefault()
            })
            // console.log(this)
            // console.log(e)
        })
    })  
}


$('.owl-carousel').owlCarousel({
  loop:true,
  autoWidth: false,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

let filterBtns = document.querySelectorAll('.filter-btn > a');
let filterItems = Array.from(document.querySelectorAll('.works-list__item'));
filterBtns.forEach((e,i) => {
  e.addEventListener('click', event => {
    event.preventDefault();
    filterBtns.forEach(ee => ee.parentElement.classList.remove('active'))
    var clickedBtn = event.target;
    clickedBtn.parentElement.classList.add('active')

    var target_type = clickedBtn.dataset.type
    filterItems.forEach(item => {
      var type_list = JSON.parse(item.dataset.type) 
      if (type_list.includes(target_type)){
        item.classList.remove('hide')
      }else{
        item.classList.add('hide')
      }
    })
  })
})