const scrollElem = document.querySelectorAll('.main-section')

window.addEventListener("scroll", ()=>{
  updateImg()
})

function updateImg(){
  scrollElem.style.opacity = 1 - window.pageYOffset / 700;

  console.log(window.pageYOffset)

  scrollElem.style.backgroundSize = 100 - window.pageYOffset / 12 + '%'
}