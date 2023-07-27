fetch("items.json")
.then(function(response){
    return response.json()
})
.then(function(props){
    const placeholderDiv = document.querySelector("#placeholder")
    let out = ``
        out += 
        `
        <button class="btn" id="pop-up-button" onclick="openPopup(${prop.id})">${props.btnName}</button>
        <div class="popup" id=${props.id}>
            <div class="popup-content">
                <span class="close" onclick="closePopup(${props.id})">&times;</span>
                <h3 id="header">${props.divHeader}</h3>
                <img class="image" src="${props.imagePath}">
            </div>
        </div>
        `
    placeholderDiv.innerHTML = out
})