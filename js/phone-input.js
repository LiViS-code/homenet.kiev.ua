document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('tel');

  let getInputNumbersValue = input => {
    return input.value.replace(/\D/g, '');
  };

  let onPhoneInput = e => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formatedInputValue = '',
      selectionStart = input.selectionStart;

    if (
      input.value[0] == '+' ||
      ['0', '3'].indexOf(inputNumbersValue[0]) > -1
    ) {
      // Ukraine phone number
      if (
        input.value[0] == '+' ||
        inputNumbersValue[0] == '0' ||
        inputNumbersValue[0] == '3'
      ) {
        formatedInputValue = '+380 (';
      }

      if (inputNumbersValue.length > 3) {
        formatedInputValue += inputNumbersValue.substring(3, 5);
      }

      if (inputNumbersValue.length >= 5) {
        formatedInputValue += ') ' + inputNumbersValue.substring(5, 8);

        if (formatedInputValue[formatedInputValue.length - 1] == ' ') {
          formatedInputValue = formatedInputValue.substring(0, 8);
        }
      }

      if (inputNumbersValue.length >= 8) {
        formatedInputValue += '-' + inputNumbersValue.substring(8, 10);

        if (formatedInputValue[formatedInputValue.length - 1] == '-') {
          formatedInputValue = formatedInputValue.substring(0, 13);
        }
      }

      if (inputNumbersValue.length >= 10) {
        formatedInputValue += '-' + inputNumbersValue.substring(10, 12);

        if (formatedInputValue[formatedInputValue.length - 1] == '-') {
          formatedInputValue = formatedInputValue.substring(0, 16);
        }
      }
    } else {
      // other phomne number
      formatedInputValue = '';
    }

    input.value = formatedInputValue;
  };

  let onPhoneKeyDown = e => {
    let input = e.target;

    if (e.keyCode == 8 && getInputNumbersValue(input).length == 3) {
      input.value = '';
      return;
    }
  };

  input.addEventListener('input', onPhoneInput, false);
  input.addEventListener('keydown', onPhoneKeyDown, false);
  input.addEventListener('paste', function (e) {
    e.preventDefault();
    return false;
  });
});
