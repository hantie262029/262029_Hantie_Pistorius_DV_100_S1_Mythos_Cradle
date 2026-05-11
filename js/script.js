
// Modal Pop up
const submit = document.getElementById('submit');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

submit.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})
