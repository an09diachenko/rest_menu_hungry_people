let navigationButton = document.querySelector('.header__navigation');

let list = document.querySelector('.header__items');

if(window.innerWidth <= 768) {
    list.classList.add('hide');
}

navigationButton.addEventListener('click', myFunction);


function myFunction() {
   list.classList.toggle('hide');
    console.log(list);
}

