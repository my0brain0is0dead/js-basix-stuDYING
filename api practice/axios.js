const axios = require('axios').default

// approved
// возвращает url рандомной картинки с сайта
function getPicture () {
    let picture = ''
    axios
        .get('https://api.waifu.pics/sfw/neko')
        .then((response) => {
            response.data.url
            return response.data.url
        })
        .catch((error) => {
            console.error(error.message)
            return ''
        })
}

function showPicture() {
    getPicture()
        .then ((url) => {
            const imagePlace = document.querySelector("#image")
            imagePlace.setAttribute('src', url)
        })
}

/*
ура оно кажется работает! открываю шампанское
*/