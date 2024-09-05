const data = {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}};
const url = "https://freetestapi.com/apis/products"
// function getData(){
//     // Simulando una promesa (no devuelve un resultado al momento, si no que debemos de esperar un momento, el tiempo depende de varias cosas)
//     setTimeout(
//         () => {console.log(data);
//             return data},
//         5000);
//     // return data;
// }

function getData(){
    return new Promise((resolve, reject) => {
        if(data == null){
            reject(new Error("Data is null"));
        }
        let seconds = Math.ceil(Math.random() * 10000);
        setTimeout(() => resolve(data), seconds);
    });
}

async function fetchingData(){
    try{
        const response = await getData();
        console.log("async Promesa cumplida");
        let divData = document.getElementById("divData");
        divData.innerHTML = response.title + "<br>" + response.description
    }catch(err){
        console.log("Promesa rechazada ", err);

    }
    
}

fetchingData();

// getData()
// .then((response) => {
//     console.log("Promesa cumplida", response);
//     let divData = document.getElementById("divData");
//     divData.innerHTML = response.title + "<br>" + response.description
// })
// .catch((err) => console.log("Promesa rechazada ", err))