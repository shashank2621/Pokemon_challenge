var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomPikaImage = "pika" + randomNumber1 + ".jpeg"; 

var randomImageSource = "images_pika/pika" + randomPikaImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images_pika/pika" + randomNumber2 + ".jpeg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Cute Pika_1";
}


else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "cute Pika_2";
}

else {
  document.querySelector("h1").innerHTML = "Both are cute ";
}
