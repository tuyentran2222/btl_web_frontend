let dark = localStorage.getItem('dark');
if (dark == 'true') {
  let root = document.querySelector(':root');
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('color', '#FFFFFF');
    root.style.setProperty('--border-none', 'var(--border)');
    root.style.setProperty('--background-color-item', 'black');
    root.style.setProperty('--title-color', '#FFFFFF');
    console.log('123')
}
let signin_form = document.querySelector('#signin-form');
let signin_btn = document.getElementById('signin-btn');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

let password ="";
function checkSignUpInput(input) {

    let value = input.value.trim();
    let form_group = input.parentElement;
    let err_span = signin_form.querySelector(`span[data-err-for="${input.id}"]`);
    
    switch (input.getAttribute('type')) {
        case 'email': {
            if (value.length === 0) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Email is not empty';
                break;
            }
            
            if (!validateEmail(value)){
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Email is invalid';
                break;
            }
            else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                err_span.innerHTML = '';
            }
            break;
        }
        case 'password' : {
            
            if (value.length < 6) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Password must be at least 6 characters';
            }
            else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                err_span.innerHTML = '';
            }
            break;
            
        }
        case 'text': {
            if (value.length === 0) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Full name is not empty';
            }
            else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                err_span.innerHTML = '';
            }
            break;
        }


        case 'date': {
            if (value === '') {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Please select birthday';
                break;
            }

            let birthday = new Date(value);
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let currentDay = new Date(date);
            
            if ( birthday > currentDay ) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Please select birthday less than today';
                break;
            }
            else {
                err_span.innerHTML = '';
                form_group.classList.add('success');
                form_group.classList.remove('error');
            }
        };
    }
}

function checkSignUpForm() {
    let inputs = signin_form.querySelectorAll('.form-group__input');
    inputs.forEach((input) => checkSignUpInput(input))
}
signin_btn.onclick = (event) => {
    event.preventDefault();
    checkSignUpForm();
    swal("Welcome!", "Login successfully!", "success");
}

let inputs = signin_form.querySelectorAll('.form-group__input');
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        checkSignUpInput(input);
    })
})