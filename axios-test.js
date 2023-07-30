const axios = require('axios').default

axios
    .get('https://fortnite-api.com/v2/cosmetics/br')
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error.message)
    })

/*
ура оно кажется работает! открываю шампанское
*/