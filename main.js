const cHeader = document.querySelectorAll('.collapsible-header') 
const cbody = document.querySelectorAll('.collapsible-body')




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

