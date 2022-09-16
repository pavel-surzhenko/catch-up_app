const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email1');
const password = document.getElementById('password1');
const loginForm = document.getElementById('loginForm');

export const saveToStorage = (obj) => {
    localStorage.setItem('login', JSON.stringify(obj));
};

loginBtn.onclick = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const teacher = JSON.parse(localStorage.getItem('teacher')) || {};

    const { 
        password: teacherPassword, 
        email: teacherEmail 
    } = teacher;

    if (teacherPassword !== password.value || teacherEmail !== email.value) {
        const student = students.find((item) => {
            return item.password === password.value && item.email === email.value;
        });

        if(!student) {
            loginForm.reset();
        } else {
            saveToStorage(student);
            window.location.href = 'student.html';
        }
    } else {
        saveToStorage(teacher);

        window.location.href = 'teacher.html';
    }
};