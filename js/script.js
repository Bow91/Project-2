'use strict';

document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
      movieDBupdate = function (films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}: ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                movieDBupdate(films, parent);
            });
        });
      },
      adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('.add'),
      checkboxChoose = addForm.querySelector('[type="checkbox"]'),
      movieInput = addForm.querySelector('.adding__input'),
      movieBtnAdd = addForm.querySelector('button'),
      deleteMovie = movieList.querySelector('.delete');

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = "url(img/bg.jpg)";
};

const sortArr = (arr) => {
    arr.sort();
};

deleteAdv(adv);
makeChanges();
movieDBupdate(movieDB.movies, movieList);

addForm.addEventListener('submit', event => {
    event.preventDefault();

    if (movieInput.value) {
        if (movieInput.value.length > 21) {
            movieInput.value = `${movieInput.value.substr(0, 22)}...`;
        }
    } 

    if (checkboxChoose.checked) {
        console.log("Добавляем любимый фильм");
    }
    movieDB.movies.push(movieInput.value[0].toUpperCase() + movieInput.value.substr(1).toLowerCase());
    sortArr(movieDB.movies);
    movieDBupdate(movieDB.movies, movieList);
    event.target.reset();
    checkboxChoose.checked = false;
});

});