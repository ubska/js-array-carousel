// Dato un array contenente una lista di cinque immagini, creare un carosello

// inserire da js i contenuti del carosello ( array )
const imageArray = [
    "img /01.webp",
    "img /02.webp",
    "img /03.webp",
    "img /04.webp",
    "img /05.webp"
];

// seleziono il contenitore
const itemsContainer = document.querySelector(".items-container")


// estrapolo gli elementi dall'array img
for (let i = 0; i < imageArray.length; i++){
    itemImg = imageArray[i];

    // creare ad ogni iterazione l'elemento da inserire
    let itemContent = `
        <div class="item">
            <img src="${itemImg}">
        </div>`
    console.log(itemContent);
    //  inseriamo il nuovo elemento nel contenitore selezionato precedentemente
    itemsContainer.innerHTML += itemContent;    
}

// seleziono tutti gli elementi in pagina
const items = document.getElementsByClassName("item");
console.log(items);