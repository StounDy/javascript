
const products = document.querySelector(".contenido")

function createCard([img,product,category,brandName,rating,price,offer]){
    let code = `
    <div class="card">
        <img src="${img}" alt="${product}">
        <div class="cardText">
          <p class="categoryText">${category}</p>
          <h2 class="brandText">${brandName}</h2>
          <h5>${rating}</h5>
          <p class="priceText">${price}</p>
          <p class="offerText">${offer}</p>
        </div>
      </div>
    `;
    products.innerHTML+=code;
}


let item1 = ["https://thumbor.4gamers.com.tw/A5DW02eIGM1ftq0zWlHvVGgh8q8=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder%2Ffiles%2FElvis%2FReview%2FAMD-Ryzen-9-5950X%2F05.jpg",
"procesador",
"AMD RYZEN 9",
"5900X 100-100000061WOF de 12 núcleos y 4.8GHz de frecuencia",
"⭐⭐⭐⭐",
"mxn$150,000",
"10% OFF"];

let item2 = ["https://http2.mlstatic.com/D_NQ_NP_736598-MLA48086025849_112021-O.webp",
"placaDeVideo",
"AORUS GEFORCE RTX 3090",
"Xtreme Waterforce 24g Nvidia Ddr6",
"⭐⭐⭐⭐",
"mxn$100,000",
"10% OFF"];

let item3 = ["https://http2.mlstatic.com/D_NQ_NP_751939-MLA46221843872_052021-O.webp",
"ssd",
"SSD Kingston 480GB",
"Disco sólido interno Kingston SA400S37/480G 480GB negro",
"⭐⭐⭐⭐",
"MXN$1.499",
"5% OFF"];

let item4 = ["https://http2.mlstatic.com/D_NQ_NP_602524-MLA48407855540_122021-O.webp",
"placaDeVideo",
"GIGABYTE GEFORCE RTX 3090",
"Placa Video Gigabyte Geforce Rtx 3090 Turbo 24g",
"⭐⭐⭐⭐",
"MXN$90.000",
"10% OFF"];

let item5 = ["https://http2.mlstatic.com/D_NQ_NP_746935-MLA46554212623_062021-O.webp",
"motherboard",
"MOTHERBOARD ASUS B550-F",
"Motherboard Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen",
"⭐⭐⭐⭐",
"mxn$11.290",
"15% OFF"];

let item6 = ["https://s3-sa-east-1.amazonaws.com/saasargentina/OStAwvpeXgNEmtBCm3E9/imagen",
"memoriaRam",
"MEMORIA RAM FURY",
"Memoria RAM Fury DDR4 RGB gamer color Negro 8GB 1 HyperX HX432C16FB3A/8",
"⭐⭐⭐⭐",
"mxn$1200",
"5% OFF"];

let item7 = ["https://http2.mlstatic.com/D_NQ_NP_2X_806529-MLA45196611572_032021-F.webp",
"fuente",
"FUENTE PC VAR 600W",
"Fuente Pc Var 600w Naxido Certificada 80 Plus Bronce",
"⭐⭐⭐⭐",
"mxn$1700",
"10% OFF"];

let item8 = ["https://http2.mlstatic.com/D_NQ_NP_751939-MLA46221843872_052021-O.webp",
"ssd",
"SSD Kingston 480GB",
"Disco sólido interno Kingston SA400S37/480G 480GB negro",
"⭐⭐⭐⭐",
"mxn$1200",
"5% OFF"];

let item9 = ["https://http2.mlstatic.com/D_NQ_NP_665452-MLA46652397376_072021-O.webp",
"gabinete",
"GABINETE GAMER GIGABYTE",
"Gabinete Gamer Gigabyte Aorus Ac300g Templado Rgb Atx Full",
"⭐⭐⭐⭐",
"mxn$2,100",
"10% OFF"];

let item10 = ["https://http2.mlstatic.com/D_NQ_NP_667897-MLA48195908295_112021-O.webp",
"procesador",
"PROCESADOR INTEL CORE",
"Procesador Gamer Intel Core I9 12900k 12va 16 Núcleos 5.2ghz",
"⭐⭐⭐⭐",
"mxn$30,000",
"15% OFF"];





//llamo a los cards

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item5);
createCard(item6);
createCard(item7);
createCard(item8);
createCard(item9);
createCard(item10);

