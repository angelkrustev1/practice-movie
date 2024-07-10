window.addEventListener("load", solve);

function solve() {
    let hideButtonElement = document.getElementById('hide-button');
    let moviesUlElement = document.getElementById('movie-ul');

    hideButtonElement.addEventListener('click', () => {
        if (!moviesUlElement.classList.contains('hide')) {
            moviesUlElement.classList.add('hide')
            hideButtonElement.textContent = 'Show'
        }
        else {
            moviesUlElement.classList.remove('hide')
            hideButtonElement.textContent = 'Hide'
        }
    })
  }