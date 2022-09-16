export const user = JSON.parse(localStorage.getItem('login')) || {
    email: 'ppmudryi@lectrum.io',
    name: 'Пётр Премудрый (default)'
};

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const greeting = document.getElementById('greeting');

greeting.innerHTML = user.name;
profileName.innerHTML = user.name;
profileEmail.innerHTML = user.email;