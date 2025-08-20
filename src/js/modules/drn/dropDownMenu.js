const activeMenu = document?.querySelector('[data-menu]')
const activeButton = document?.querySelector('[data-button]')

activeButton?.addEventListener('click', () => {
   activeButton.classList.toggle('active-icon')
   activeMenu.classList.toggle('active')
   
})


// эффект свечения текста меню
let text = document.querySelectorAll('[data-text-effect] a').forEach(text => {
   text.innerHTML = text.innerText.split('').map((letters,
      i) => `<span style = "transition-delay: ${i * 50}ms;">${letters}</span>`).join('')
})