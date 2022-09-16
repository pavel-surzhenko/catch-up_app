import { saveToStorage } from './login';
//кнопки
const regBtn = document.getElementById('regBtn');
const prevBtn1 = document.getElementById('toLoginSvg');
const prevBtn2 = document.getElementById('from3to2Svg');
const nextBtn = document.getElementById('toStep2Btn');
const stepNextBtn = document.getElementById('from1to2');
const stepBackBtn = document.getElementById('from2to1');
const studentRadioBtn = document.getElementById('user_student');
const teacherRadioBtn = document.getElementById('user_teacher');
const createAccBtn = document.getElementById('createAccount');

const inputs = document.getElementsByClassName('input-box');

//сторінки
const loginBlock = document.getElementById('loginBlock');
const step1Block = document.getElementById('step1Block');
const regBlock = document.getElementById('regBlock');

//поля
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password_next');

const user = {};

regBtn.addEventListener('click', ()=>{
    loginBlock.setAttribute('style', 'display: none;');
    step1Block.setAttribute('style', 'display: flex;');
});

nextBtn.addEventListener('click', next);
stepNextBtn.addEventListener('click', next);

prevBtn1.addEventListener('click', ()=>{
    step1Block.setAttribute('style', 'display: none;');
    loginBlock.setAttribute('style', 'display: flex;');
});

prevBtn2.addEventListener('click', back);
stepBackBtn.addEventListener('click', back);

function next() {
    step1Block.setAttribute('style', 'display: none;');
    regBlock.setAttribute('style', 'display: flex;');
    if(studentRadioBtn.checked) {
        user.type = 'student';
    }
    else {
        user.type = 'teacher';
    }
};

function back() {
    regBlock.setAttribute('style', 'display: none;');
    step1Block.setAttribute('style', 'display: flex;');
}

function validationName() {
    const label = document.querySelector("label[for='name']");

    if(!/[A-ZА-ЯЁ]{2,}\s[A-ZА-ЯЁ]{2,}/gi.test(name.value)) {
        name.classList.add('error');
        label.innerText = 'Введите имя и фамилию';
        label.style='color:red;';
        return false;
    }
    else {
        name.classList.remove('error');
        label.innerText = 'Имя и фамилия';
        label.style = '';
        return true;
    }
};

function validationMail() {
    const label = document.querySelector("label[for='email']");

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false) {
        email.classList.add('error');
        label.innerText = 'Введите правильный email';
        label.style='color:red;';
        return false;
    }
    else{
        email.classList.remove('error');
        label.innerText = 'Электропочта';
        label.style = '';
        return true;
    }
};

function validationPassword() {
    const label = document.querySelector("label[for='password']");

    if(password.value.length < 1 || password.value !== password2.value) {
        password.classList.add('error');
        password2.classList.add('error');
        label.innerText = 'Пароли не совпадают';
        label.style='color:red;';
        return false;
    }
    else{
        password.classList.remove('error');
        password2.classList.remove('error');
        label.innerText = 'Пароль';
        label.style = '';
        return true;
    }
}

createAccBtn.addEventListener('click', ()=>{
    if(validationName() && validationMail() && validationPassword()) {
        if(studentRadioBtn.checked) {
            const students = JSON.parse(localStorage.getItem('students')) ?? [];
            students.push({
                type: user.type,
                name: name.value,
                email: email.value,
                password: password.value
            });
            localStorage.setItem('students', JSON.stringify(students));
            saveToStorage(students[students.length -1]);
            window.location.href = 'student.html';
        }
        else {
            user.name = name.value;
            user.email = email.value;
            user.password = password.value;

            localStorage.setItem('teacher', JSON.stringify(user));
            saveToStorage(user);
            window.location.href = 'teacher.html';
        }
        inputs.forEach(item => item.value = '');
    }
});

