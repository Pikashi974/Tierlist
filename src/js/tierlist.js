function getImages() {
  document.querySelector("#listImages").innerHTML = "";
  for (let index = 0; index < images.length; index++) {
    const element = images[index];
    document.querySelector("#listImages").innerHTML += `
    <img class="fit-picture"
    id="img${index}"
  src="${element}"
  alt="" width="100" height="100" draggable="true" ondragstart="dragstart_handler(event);"/>

    `;
  }
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
                            <div class="settings">
                                <i class="bi bi-gear-fill"></i>
                            </div>
                            <div class="move-buttons">
                                <div class="move-up">
                                    <i class="bi bi-chevron-up"></i>
                                </div>
                                <div class="move-down">
                                    <i class="bi bi-chevron-down"></i>
                                </div>
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
