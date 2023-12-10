// *** Задание под звездочкой
// У вас есть массив с информацией о популярных режиссёрах. Отобразите информацию о каждом режиссёре на странице.   
//     - Сохраните в переменную массив.
//     - Вызовите метод `forEach` у массива.
//     - В функцию обработчик добавьте код, который относится к работе с DOM
//     - В найденные элементы на странице добавьте информацию из каждого элемента массива.
//     - Создайте новый массив `topFilmsList`, в нём должны быть лучшие фильмы режиссёров (они хранятся в полях `top_rated_film`).


const directors = [
{
    name: 'Steven Spielberg',
    career: 'Producer, Director, Actor, Screenwriter, Editor',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: "Schindler's List"
},
{
    name: 'Christopher Nolan',
    career: 'Screenwriter, Producer, Director, Cinematographer, Editor, Actor, Composer',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Inception'
},
{
    name: 'Martin McDonagh',
    career: 'Screenwriter, Director, Producer',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Three Billboards Outside Ebbing, Missouri'
},
{
    name: 'Alexey Balabanov',
    career: 'Director, Screenwriter, Actor, Producer',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Brother'
},
{
    name: 'Peter Farrelly',
    career: 'Producer, Director, Screenwriter, Actor',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Green Book'
},
{
    name: 'Yuri Bykov',
    career: 'Actor, Director, Screenwriter, Composer, Editor, Producer',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'The Fool'
},
{
    name: 'Jean-Marc Vallee',
    career: 'Director, Producer, Editor, Actor, Screenwriter',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Dallas Buyers Club'
},
];


const directorsHtml = document.querySelector('.directors')
directors.forEach(director => {
    console.log(director.films);
    directorsHtml.innerHTML += `
    <div class="directors__item">
        <div class="directors__item-info">
            <p class="directors__item-name">${director.name}</p>
            <p class="directors__item-description">${director.career}</p>
        </div>
        <a class="directors__item-link" href="${director.films}">${director.films}</a>
    </div>
`
})

const topFilmsList = directors.map(function(director) {
    return director.top_rated_film;
});

bestFilms.textContent = `The best films of these directors: ${topFilmsList.join(', ')}`;





// const directorsNames = document.getElementsByClassName('directors__item-name');
// // console.log(directorsNames);
// const directorsDescriptions = document.getElementsByClassName('directors__item-description');
// // console.log(directorsDescriptions);
// const directorsLinks = document.getElementsByClassName('directors__item-link');
// // console.log(directorsLinks);
// const bestFilms = document.getElementById('bestFilms');
// // console.log(bestFilms);


// const names = directors.map(function(director) {
//     return director.name;
// });

// for (let i = 0; i < names.length; i++) {
//     directorsNames[i].textContent = names[i];
// }

// const descriptions = directors.map(function(director) {
//     return director.career;
// });

// for (let i = 0; i < descriptions.length; i++) {
//     directorsDescriptions[i].textContent = descriptions[i];
// }

// const links = directors.map(function(director) {
//     return director.films;
// });

// for (let i = 0; i < links.length; i++) {
//     directorsLinks[i].textContent = links[i];
//     directorsLinks[i].href = links[i];
// }