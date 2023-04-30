document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('tel');

  let getInputNumbersValue = input => {
    return input.value.replace(/\D/g, '');
  };

  let onPhoneInput = e => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formatedInputValue = '';

    if (
      input.value[0] == '+' ||
      ['0', '3'].indexOf(inputNumbersValue[0]) > -1
    ) {
      // Украинские номера телефонов
      if (
        input.value[0] == '+' ||
        inputNumbersValue[0] == '0' ||
        inputNumbersValue[0] == '3'
      ) {
        // добавляем код страны
        formatedInputValue = '+380 (';
      }

      // форматируем код оператора
      if (inputNumbersValue.length > 3) {
        formatedInputValue += inputNumbersValue.substring(3, 5);
      }

      // форматируем первые 3 цифры номера
      if (inputNumbersValue.length >= 5) {
        formatedInputValue += ') ' + inputNumbersValue.substring(5, 8);

        // при удалении - убираем 3 цифры из поля ввода
        if (formatedInputValue[formatedInputValue.length - 1] == ' ') {
          formatedInputValue = formatedInputValue.substring(0, 8);
        }
      }

      // форматируем 2 последующие цифры номера
      if (inputNumbersValue.length >= 8) {
        formatedInputValue += '-' + inputNumbersValue.substring(8, 10);

        // при удалении - убираем 2 цифры из поля ввода
        if (formatedInputValue[formatedInputValue.length - 1] == '-') {
          formatedInputValue = formatedInputValue.substring(0, 13);
        }
      }

      // форматируем 2 последние цифры номера
      if (inputNumbersValue.length >= 10) {
        formatedInputValue += '-' + inputNumbersValue.substring(10, 12);

        // при удалении - убираем 2 последние цифры из поля ввода
        if (formatedInputValue[formatedInputValue.length - 1] == '-') {
          formatedInputValue = formatedInputValue.substring(0, 16);
        }
      }
    } else {
      // номера не из Украины - игнорируем
      formatedInputValue = '';
    }

    // возвращаем отформатированный номер по маске: '+380 (12) 345-67-89'
    input.value = formatedInputValue;
  };

  let onPhoneKeyDown = e => {
    let input = e.target;

    // удаляем последние символы из поля ввода: '+380 (' для полной очитски поля.
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 3) {
      input.value = '';
      return;
    }
  };

  // слушать поле ввода номера телефона
  input.addEventListener('input', onPhoneInput, false);

  // слушать нажатие клавиши (для реализации удаления цифр из поля ввода)
  input.addEventListener('keydown', onPhoneKeyDown, false);

  // Блокирую вставку телефона из буфера
  input.addEventListener('paste', function (e) {
    e.preventDefault();
    return false;
  });

  // Устанавливаем новый placeholder при получении фокуса
  input.addEventListener('focus', function () {
    this.placeholder = '+380 (__) ___-__-__';
  });

  // Возвращаем оригинальный placeholder при потере фокуса
  input.addEventListener('blur', function () {
    this.placeholder = 'Контактний телефон';
  });
});
