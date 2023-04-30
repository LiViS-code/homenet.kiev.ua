document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('frm_order');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Получаем значение поля ввода с именем
    const personNameInput = document.getElementById('person_name');
    const personName = personNameInput.value;

    // Получаем значение поля ввода номера телефона
    const phoneInput = document.getElementById('tel');
    const phoneValue = phoneInput.value;
    const poneInputLbl = document.getElementById('lbl-tel');
    const poneInputIcn = document.getElementById('icn-tel');

    // Получаем значение поля ввода комметария
    const msgInput = document.getElementById('msg');
    const msg = msgInput.value;

    // Удаляем из номера телефона все нецифровые символы
    const cleanedPhoneValue = phoneValue.replace(/\D/g, '');

    // Проверяем, достаточно ли цифр в номере телефона
    if (cleanedPhoneValue.length < 12) {
      // Перекрашиваем поле ввода телефона в цвета ошибки
      phoneInput.classList.add('error');
      poneInputLbl.classList.add('error');
      poneInputIcn.classList.add('error');

      // Если цифр недостаточно, выводим сообщение об ошибке
      alert('Перевірте номер телефону');
      return;
    }

    // Убираем цвета ошибок, если они были
    const errorElements = document.querySelectorAll('.error');

    if (errorElements.length != 0) {
      console.log('errorElements:', errorElements);
      for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].classList.remove('error');
      }
    }

    // Отправляем данные формы на сервер
    // ...

    const order = {
      name: personName,
      phome: phoneValue,
      мessage: msg,
      dateOrder: new Date(),
    };

    // Отправить данные по заявке...
    console.log('Заявка:', order);

    // Очисить поля формы
    personNameInput.value = '';
    phoneInput.value = '';
    msgInput.value = '';
  });
});
