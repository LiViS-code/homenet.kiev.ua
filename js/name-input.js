document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('person_name');

  input.addEventListener('input', e => {
    let regex = /^[a-zA-Zа-яА-ЯёЁ\s]*$/;

    // запретить ввод любых символов, кроме букв и пробела
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    }
  });
});
