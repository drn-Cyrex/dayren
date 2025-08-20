const dialogBackground = document.querySelector('#dialog-background')
const dialog = document.querySelector('#dialog')
const openDialog = document.querySelector('#openDialog-btn')
const closeDialog = document.querySelector('#closeDialog')


const openModal = () => {
   dialogBackground.style.display = 'block';
   dialog.showModal()
}

openDialog?.addEventListener('click', openModal)



closeDialog?.addEventListener('click', () => {
   dialogBackground.style.display = 'none'
   dialog.close()
})





















