window.addEventListener("load", solve);

function solve() {
    let is_hide = false;

    let hideButtonElement = document.getElementById('hide-button');
    let moviesUlElement = document.getElementById('movie-ul');

    hideButtonElement.addEventListener('click', () => {
        if (!is_hide) {
            moviesUlElement.classList.add('hide')
            is_hide = true;
        }
        else {
            moviesUlElement.classList.remove('hide')
            is_hide = false;
        }
    })
  }