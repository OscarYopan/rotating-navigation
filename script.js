const rotate = document.querySelector('.container')
const open = document.getElementById('open')
const close = document.getElementById('close')

openMenu()
closeMenu()

function openMenu(){
  open.addEventListener('click', () =>{
    rotate.classList.add('show-nav')
  })
}

function closeMenu(){
  close.addEventListener('click', () =>{
    rotate.classList.remove('show-nav')
  })
}