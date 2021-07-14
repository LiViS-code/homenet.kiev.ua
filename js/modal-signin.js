(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-signin]'),
    closeModalBtn: document.querySelector('[data-modal-close-signin]'),
    modal: document.querySelector('[data-modal-signin]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();