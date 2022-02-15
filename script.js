// const httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = gestisciRisposteDelServer;

// httpRequest.open('GET', './assets/data.json');

// httpRequest.send();


// function gestisciRisposteDelServer() {
//     console.log("ready state", httpRequest.readyState);
//     console.log("status", httpRequest.status);
//     console.log("response", httpRequest.responseText);
//     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//         const arrayOfUsers = JSON.parse(httpRequest.responseText);
//         console.log(arrayOfUsers);
//     }
// }


fetch("https://www.dnd5eapi.co/api/spells/")
.then((response) => response.json())
.then(onDataReady)
.catch(onError);




// function onDataReady(data) {
//     const list = document.getElementById('book-list');
//     for (const book of data) {

//         const listElement = document.createElement('li');

//         listElement.className += "book-card" + " "

//         addTextToHtmlElement(listElement, book.title, true, 'bold large-font')

//         addTextToHtmlElement(listElement, book.author, true, 'large-font')

//         addTextToHtmlElement(listElement, book.price)

//         list.appendChild(listElement);
//     }

// }

function onDataReady(data) {
    const list = document.getElementById('book-list');
    list.removeChild()
    for (const spell of data.results) {

        const listElement = document.createElement('li');

        listElement.className += "book-card" + " "

        listElement.onclick

        addTextToHtmlElement(listElement, spell.name, true, 'bold large-font')

        // addTextToHtmlElement(listElement, book.author, true, 'large-font')

        // addTextToHtmlElement(listElement, book.price)

        list.appendChild(listElement);
    }

}

function addTextToHtmlElement(htmlElement, text, isNewLine = false, className){
    const span = document.createElement('span');
    span.className += className + " "    
    const textNode = document.createTextNode(text);
    span.appendChild(textNode);
    htmlElement.appendChild(span);
    if (isNewLine) {
        const newLine = document.createElement('br');
        htmlElement.appendChild(newLine);
    }
}

function onError(error) {
    console.log(error);
}