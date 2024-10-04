const div = document.querySelector("div");
const body = document.body;

const arr = [
  "images/image.jpg",  // Resim yolunu burada da kontrol et
  "images/image2.avif",
  "images/image3.avif",
  "images/image5.jpg",
  "images/image6.avif",
  "images/image7.avif",
  "images/image8.avif",
  "images/image9.avif",
  "images/image10.avif",
];

const gradients = [
    "linear-gradient(135deg, #0bdbf7, #011a2e)",
    "linear-gradient(135deg, #144352, #7ec3fc)",
    "linear-gradient(135deg, #023241, #ee4dbe)",
    "linear-gradient(135deg, #420338, #ee4dbe)",
    "linear-gradient(135deg, #d1097e, #5e0142)",
];

function changeBgImage() {
    let index = Math.floor(Math.random() * arr.length);
    div.style.backgroundImage = `url(${arr[index]})`;
}

function changeBodyGradient() {
    let index = Math.floor(Math.random() * gradients.length);
    body.style.background = gradients[index];
}

setInterval(() => {
    changeBgImage();
    changeBodyGradient();
}, 2000);
