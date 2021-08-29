'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
      adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
    //   movieName = movieList.querySelectorAll('promo__interactive-item');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage= "url(img/bg.jpg)";

movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});