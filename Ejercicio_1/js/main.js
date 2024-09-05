const divData = document.getElementsByTagName("div");

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then((response) => {
        response.json().then(
            (data) => {
                console.log(data);
                createCards(data);
            }).catch((err) => console.log("Problema con el Json", err));  
    }).catch((err) => console.log("Ocurrio un problema con la solicitud", err))
}

function createCards(products){
    console.log(products.length);
    products.forEach(product => {
        // const divCard = document.createElement("div");
        // divCard.classList = "card mt-2 ms-auto me-auto col-6";
        // const productImage = document.createElement("img");
        // productImage.src= product.image;
        // product.classList = "card-img-top";
        // const divCardBody = document.createElement("div");
        // divCardBody.classList = "card-body";
        // const cardTitle = document.createElement("h5");
        // cardTitle.classList = "card-title";
        // cardTitle.innerText = product.name;
        // const cardText = document.createElement("p");
        // cardText.classList = "card-text";
        // cardText.innerHTML = `Descripción: ${product.description} <br/>Precio: ${product.price}`
        // divCardBody.append(cardTitle);
        // divCardBody.append(cardText);
        // divCard.append(productImage);
        // divCard.append(divCardBody);
        // divData.append(divCard);
        divData.item(0).insertAdjacentHTML("beforeend", `
            <div class= "card mt-2 col-sm-3"> 
                <img src="${product.image}" alt="imagen-producto" class="card-img-top">
                <div class="card-body" >
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Description: ${product.description} <br/>Price: ${product.price}</p>
                </div>
            </div>
        `);
    });
}

getData();          