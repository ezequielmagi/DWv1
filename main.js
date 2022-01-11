const cHeader = document.querySelectorAll('.collapsible-header') 
const cbody = document.querySelectorAll('.collapsible-body')
const headerButton = document.getElementById('header-button')
const headerButtonClose = document.getElementById('header-button-close')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')
const footer = document.querySelector('footer')


headerButton.addEventListener('click', ()=>{
  headerButton.classList.toggle('hide')
  headerButtonClose.classList.toggle('hide')
  modal.classList.toggle('hide')
  main.classList.toggle('hide')
  footer.classList.toggle('hide')
})

headerButtonClose.addEventListener('click', ()=>{
   headerButton.classList.toggle('hide')
  headerButtonClose.classList.toggle('hide')
  modal.classList.toggle('hide')
  main.classList.toggle('hide')
  footer.classList.toggle('hide')
})


cHeader.forEach( itemHeader => {
  itemHeader.addEventListener('click' , ()=>{
    const currentBody = itemHeader.nextElementSibling
    
    if(currentBody.classList.contains("activo")){
      itemHeader.childNodes[1].textContent = "expand_more"
    }else{
      itemHeader.childNodes[1].textContent = "expand_less"
    }   
    
    currentBody.classList.toggle('activo')
    
   
  })
} )

