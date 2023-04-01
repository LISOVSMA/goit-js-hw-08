import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onEmailInput, 500));

fillTextarea();

function onEmailInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Заповніть будь ласка всі поля');
  }

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(savedData);

  if (savedData) {
    parseData.email === undefined
      ? (refs.email.value = '')
      : (refs.email.value = parseData.email);
    parseData.message === undefined
      ? (refs.message.value = '')
      : (refs.message.value = parseData.message);
    formData = parseData;
  }
}
