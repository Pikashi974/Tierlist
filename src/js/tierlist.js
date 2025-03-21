async function getImages() {
  document.querySelector("#listImages").innerHTML = "";
  listNumbers = images.map((element) => element.match(/[0-9]+/gm)[0]);
  for (let index = 0; index < images.length; index++) {
    const element = images[index];
    let url = await fetch(element);
    // let url = await fetch(element).then((res) => res.url);
    if (url.status == 200) {
      url = await fetch(element).then((res) => res.url);
      document.querySelector("#listImages").innerHTML += `
      <img class="fit-picture"
      id="img${listNumbers[index]}"
      title="${images_names[index]}"
    src="${url}"
    alt="${index}" width="100" height="100" draggable="true" ondragstart="dragstart_handler(event);"/>

      `;
    }
    // var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //   var proxyUrl = "http://localhost:8080/";
    //   toDataUrl(proxyUrl + element, function (data) {
    //     // console.log(data);
    //     setTimeout(
    //       (document.querySelector("#listImages").innerHTML += `
    //   <img class="fit-picture"
    //   id="img${index}"
    // src="${data}"
    // alt="${index}" width="100" height="100" draggable="true" ondragstart="dragstart_handler(event);"/>

    //   `),
    //       2000
    //     );
    //   });
    // console.log(dataURL);
  }
  document.querySelector("#searchCards > div").classList.toggle("d-none");
}

/**
 *
 * @param {number} current
 * @param {number} numberRow
 */
function addRows(current, numberRow) {
  let table = [
    "S",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // let container = document.querySelector("");
  for (let index = current; index < numberRow; index++) {
    const element = table[index];
    tierContainer.innerHTML += `<div class="tier-row">
                        <div class="label-holder" contenteditable="true" style="background-color: rgb(255, 127, 127);">
                            <span class="label">${element}</span>
                        </div>
                        <div class="tier sort" ondrop="drop_handler(event)" ondragover="dragover_handler(event);"></div>
                        <div class="settings-control">
                            <div class="settings" data-bs-toggle="modal" data-bs-target="#modalParameters" onclick="formParameters(${index});">
                                <i class="bi bi-gear-fill"></i>
                            </div>
                            
                        </div>
                    </div>`;
  }
}

/**
 *
 * @param {number} numberRow
 */
function deleteRows(numberRow) {
  let container = tierContainer.querySelectorAll(".tier-row");
  let nbToRemove = container.length - numberRow;
  for (let index = 1; index <= nbToRemove; index++) {
    let value = container.length - index;
    container[value].remove();
  }
  // }
}

function exportImage() {
  document.querySelectorAll(".settings-control").forEach((element) => {
    element.classList.toggle("d-none");
  });
  domtoimage.toPng(tierContainer).then(function (blob) {
    var link = document.createElement("a");
    link.download = "Tierlist.png";
    link.href = blob;
    link.click();
    document.querySelectorAll(".settings-control").forEach((element) => {
      element.classList.toggle("d-none");
    });
  });
}

function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}
