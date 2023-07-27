fetch("items.json")
.then(function(response){
    return response.json()
})
.then(function(props){
    const placeholderDiv = document.querySelector("#placeholder")
    let out = ''
    for (let prop of props) {
        out += `
        <button class="btn" id="pop-up-button" onclick="openPopup(${prop.id})">${prop.btnName}</button>
        <div class="popup" id=${prop.id}>
            <div class="popup-content">
                <span class="close" onclick="closePopup(${prop.id})">&times;</span>
                <h3 id="header">${prop.divHeader}</h3>
                <img class="image" src="${prop.imagePath}">
            </div>
        </div>
        `
    }
})