import { user } from './profile';

const formComment = document.getElementById('formComment');

formComment.onsubmit = (event) => {
    event.preventDefault();

    const radioBtn = formComment.querySelector('input[type="radio"]:checked');
    const textarea = formComment.querySelector('textarea');

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([{
        name: user.name,
        rating: radioBtn.value,
        review: textarea.value,
        created: new Date()
    }, ...reviews]));

    formComment.reset();
};