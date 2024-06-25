const containerElem = document.querySelector(".main-container")
const popupCont = document.querySelector(".popup-cont")
const closeIcon = document.querySelector(".close-icon")

const btn = document.querySelector(".btn")
const btnSubmit = document.querySelector(".btn-submit")

btn.addEventListener("click", ()=>{
  popupCont.classList.remove('hide')
  containerElem.classList.add('blur')
})
closeIcon.addEventListener("click", ()=>{
  popupCont.classList.add('hide')
  containerElem.classList.remove('blur')
})
btnSubmit.addEventListener("click", ()=>{
  popupCont.classList.add('hide')
  containerElem.classList.remove('blur')
})