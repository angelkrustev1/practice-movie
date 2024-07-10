window.addEventListener("load", solve);

function solve() {
    let moviesURL = 'http://localhost:3000/movies'
    let isLoaded = false;

    let hideButtonElement = document.getElementById('hide-button');
    let moviesUlElement = document.getElementById('movie-ul');
    let loadButtonElement = document.getElementById('load-button')
    let deleteButtonElement = document.getElementById('delete-button')

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

    loadButtonElement.addEventListener('click', async () => {
        let moviesResponse = await fetch(moviesURL)
        let moviesDate = await moviesResponse.json()

        if (isLoaded) {
            return
        }

        for (let movie of Object.values(moviesDate)) {
            let pictureImgElement = document.createElement('img');
            pictureImgElement.src = movie.image
           
            let pictureLiElement = document.createElement('li')

            pictureLiElement.appendChild(pictureImgElement)
            moviesUlElement.appendChild(pictureLiElement)
        }
        isLoaded = true;
    })

    deleteButtonElement.addEventListener('click', () => {
        moviesUlElement.innerHTML = ''
        isLoaded = false;
    })
  }