const lessons = document.getElementById('planedLessons');

const bookedLessons = JSON.parse(localStorage.getItem('lessons')) ?? [{
    name: 'Анна Перминова (default)',
    time: 14,
    tomorrow: false,
    title: 'Новый урок',
    duration: 60
}];

const getLesson = (lesson) => {
    let { name, time, tomorrow, title, duration } = lesson;
    tomorrow === true ? tomorrow = "Завтра" : tomorrow = 'Сегодня';
    let i;
    duration % 60 == 0 ? i =`${time + Math.floor(duration/60)}:00` : i = `${time + Math.floor(duration/60)}:30`;
    return `
            <div class='card-box'>
                <div class="card-illustration">
                    <img src='./images/user_01.png' alt='profile image'>
                </div>
                <div class='info'>
                    <p class='sub-title'>${tomorrow}, ${time}:00 — ${i}</p>
                    <p class='info-title'>${name}</p>
                    <p class='info-desc'>${title}</p>
                </div>
            </div>`;
};

const generateHtml = () => {
    const lessonsHtml = bookedLessons.map((lesson)=>{
        return getLesson(lesson);
    }).join('');
    document.querySelectorAll('.block__scheduled-lessons div.card-box')
            .forEach((el) => el.remove());
    lessons.insertAdjacentHTML('afterend',lessonsHtml);
};

generateHtml();

//В залежності від заброньованих уроків, відоражає вільні слоти у вчителя (підправив привильні години в Html)

function freeSlots() {
    const hours = document.querySelectorAll('.time-slot-box');
    const hoursHtml = bookedLessons.forEach((lesson)=>{
        if(lesson.tomorrow === false) {
            lesson.time == 12 ? hours[0].innerText = '—:—' :
            lesson.time == 14 ? hours[1].innerText = '—:—' :
            hours[2].innerText = '—:—' ;
        }
        else{
            lesson.time == 12 ? hours[4].innerText = '—:—' :
            lesson.time == 14 ? hours[5].innerText = '—:—' :
            hours[6].innerText = '—:—' ;
        };
    });
}
freeSlots();