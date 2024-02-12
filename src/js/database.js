const urlInput = document.querySelector("#adresseAPI");

let images = [];

urlInput.addEventListener("change", async () => {
  images = [];
  let response = await fetch(urlInput.value).then((res) => res.json());
  response.data.forEach((card) => {
    images.push(card.card_images[0].image_url_cropped);
  });
  //   console.log(images);
  getImages();
});
