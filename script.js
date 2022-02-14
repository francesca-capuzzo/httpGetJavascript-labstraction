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


fetch("https://cat-fact.herokuapp.com/facts")
.then((response) => response.json())
.then(onDataReady)
.catch(onError);




function onDataReady(data) {
console.log(data)
}

function onError(error) {
    console.log(error);
}