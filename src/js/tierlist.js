function getImages() {
  document.querySelector("#listImages").innerHTML = "";
  for (let index = 0; index < images.length; index++) {
    const element = images[index];
    document.querySelector("#listImages").innerHTML += `
    <img class="fit-picture"
    id="img${index}"
  src="${element}"
  alt="" width="100" draggable="true" ondragstart="dragstart_handler(event);"/>

    `;
  }
}
