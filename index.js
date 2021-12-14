




const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]



const listing = function(){
    let list = document.createElement("ul")
    let bodyContainer= document.querySelector("body")
    bodyContainer.appendChild(list)

    for( i=0; i<genres.length; i++){
        let item = document.createElement("li")
        item.innerText=genres[i]
        list.appendChild(item)
    }
}







