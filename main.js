const main = document.querySelector('.main')
const mobileMenu = document.querySelector('.mobile-menu')
const headerButton = document.getElementById('header-button')
console.log(main)
console.log(mobileMenu)

headerButton.addEventListener('click',()=>{
  main.classList.toggle('hide')
  mobileMenu.classList.toggle('hide')
})

const clases = document.querySelectorAll('.clases')
console.log(clases)

// clases.addEventListener('click', e =>{
//   e.preventDefault();
//   console.log(e.target.innerHtml)
// })

clases.forEach(clase => {
  clase.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target)
  })
});