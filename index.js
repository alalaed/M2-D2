




const genres = ["HipHop", "Rap", "Jazz", "Alt.Rock", "RnB", "Pop"]




let list = document.createElement("ul")
let bodyContainer= document.querySelector("body")
bodyContainer.appendChild(list)

for( i=0; i<genres.length; i++){
    let item = document.createElement("li")
    item.innerText=genres[i]
    list.appendChild(item)
}








