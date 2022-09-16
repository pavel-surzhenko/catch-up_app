import '../../../css/style.css';

import './comments';
import './lessons';
import './profile';

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.onclick = () => {
    localStorage.removeItem('login');
    window.location.href = 'index.html';
};