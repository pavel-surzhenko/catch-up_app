import {timeSlots} from './constants';
import {lessons} from './constants';

const form = document.getElementById('formLessons');
const user = JSON.parse(localStorage.getItem('login'));

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const bookedLessons = JSON.parse(localStorage.getItem('lessons')) ?? [];
    const checkedInputs = document.querySelectorAll('input[type="radio"]:checked');
    const checkedLesson = checkedInputs[1].id;
    const checkedTime = checkedInputs[2].id;
    bookedLessons.push({
        name: user.name,
        time: timeSlots[checkedTime],
        tomorrow: checkedTime == 'time_04' || checkedTime =='time_05' || checkedTime =='time_06',
        title: lessons[checkedLesson].title,
        duration: lessons[checkedLesson].duration
    });
    localStorage.setItem('lessons', JSON.stringify(bookedLessons));
    generateHtml();
    window.location.reload(); 
});

//Відображення заброньованих уроків справа у учня, не зміг тільки зробити щоб додавалось динамічно, без оновлення сторінки
// я так розумію, потрібен інший метод,  з передачею строки так не вийде? 

const planedLessons = document.getElementById('block-planed');
const bookedLessons = JSON.parse(localStorage.getItem('lessons')) ?? [{}];
const userLesson = bookedLessons.filter(el=>el.name == user.name);

const getLesson = (lesson) => {
    let { time, tomorrow, title, duration } = lesson;
    tomorrow === true ? tomorrow = "Завтра" : tomorrow = 'Сегодня';
    let i;
    duration % 60 == 0 ? i =`${time + Math.floor(duration/60)}:00` : i = `${time + Math.floor(duration/60)}:30`;
    if(Object.keys(lesson).length == 0){
        return `
        <div class="card-box">
            <div class="card-illustration _blue">
                    <span class="svg-notification ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                            d="M9.7 20.6c-.3-.3-.2-.8.1-1.1.3-.3.8-.2 1.1.1.1.2.3.3.4.4.4.3 1 .4 1.5.4.5-.1 1-.4 1.3-.8.3-.3.8-.4 1.1-.1.3.3.4.7.1 1.1-1.2 1.6-3.5 1.8-5 .6-.2-.1-.4-.3-.6-.6zM8 17.8c-1.2-.1-2.3-.7-3.1-1.5-.6-.8-1-1.7-1-2.7v-.1c.1-.7.3-1.5.7-2.1l.1-.1c.4-.5.7-1.1.9-1.8V7.6c.2-.4.6-.6 1-.4.2.1.4.3.5.6V9.7c-.2.9-.6 1.7-1.2 2.4-.2.4-.4.8-.4 1.2v.2c0 .6.2 1.2.6 1.7.6.6 1.3.9 2.1 1 2.9.3 5.7.3 8.6 0 .8-.1 1.6-.4 2.1-1 .4-.5.6-1.1.6-1.7v-.2c0-.4-.1-.9-.4-1.3-.6-.7-1.1-1.5-1.3-2.4V7.8c-.3-2.6-2.9-4.3-5.3-4.3-1 0-2 .2-2.8.7-.2.1-.5.1-.8 0-.3-.2-.5-.6-.2-1 0-.1.1-.2.3-.3 1-.6 2.2-.9 3.5-.9 3.1 0 6.5 2.2 6.9 5.6v1.8c.1.7.4 1.3.9 1.8l.1.1c.4.6.6 1.3.7 2v.2c0 1-.3 2-.9 2.7-.8.9-1.9 1.4-3.1 1.5-1.5.2-3 .2-4.4.2-1.7.1-3.2 0-4.7-.1z"/></svg>
                </span>
            </div>
            <div class="info">
                <p class="info-title">У тебя еще нет уроков, запишись!</p>
                <p class="info-desc"></p>
            </div>
        </div>`;
    }
    else{
        return `
        <div class="card-box">
            <div class="card-illustration _blue">
                    <span class="svg-notification ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                            d="M9.7 20.6c-.3-.3-.2-.8.1-1.1.3-.3.8-.2 1.1.1.1.2.3.3.4.4.4.3 1 .4 1.5.4.5-.1 1-.4 1.3-.8.3-.3.8-.4 1.1-.1.3.3.4.7.1 1.1-1.2 1.6-3.5 1.8-5 .6-.2-.1-.4-.3-.6-.6zM8 17.8c-1.2-.1-2.3-.7-3.1-1.5-.6-.8-1-1.7-1-2.7v-.1c.1-.7.3-1.5.7-2.1l.1-.1c.4-.5.7-1.1.9-1.8V7.6c.2-.4.6-.6 1-.4.2.1.4.3.5.6V9.7c-.2.9-.6 1.7-1.2 2.4-.2.4-.4.8-.4 1.2v.2c0 .6.2 1.2.6 1.7.6.6 1.3.9 2.1 1 2.9.3 5.7.3 8.6 0 .8-.1 1.6-.4 2.1-1 .4-.5.6-1.1.6-1.7v-.2c0-.4-.1-.9-.4-1.3-.6-.7-1.1-1.5-1.3-2.4V7.8c-.3-2.6-2.9-4.3-5.3-4.3-1 0-2 .2-2.8.7-.2.1-.5.1-.8 0-.3-.2-.5-.6-.2-1 0-.1.1-.2.3-.3 1-.6 2.2-.9 3.5-.9 3.1 0 6.5 2.2 6.9 5.6v1.8c.1.7.4 1.3.9 1.8l.1.1c.4.6.6 1.3.7 2v.2c0 1-.3 2-.9 2.7-.8.9-1.9 1.4-3.1 1.5-1.5.2-3 .2-4.4.2-1.7.1-3.2 0-4.7-.1z"/></svg>
                </span>
            </div>
            <div class="info">
                <p class="info-title">${tomorrow} "${title}"!</p>
                <p class="info-desc">${time}:00 — ${i}, не опаздывай</p>
            </div>
        </div>`;
    };
};

const generateHtml = () => {
    if(userLesson.length == 0) {
        userLesson.push({});
    }
    const lessonsHtml = userLesson.map((lesson)=>{
        return getLesson(lesson);
    }).join('');
    document.querySelectorAll('.block__notification div.card-box')
            .forEach((el) => el.remove());
    planedLessons.insertAdjacentHTML('afterbegin',lessonsHtml);
};

generateHtml();
