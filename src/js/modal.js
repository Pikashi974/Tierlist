function formParameters(index) {
  let currentColor = document
    .querySelectorAll(".settings")
    [index].parentNode.parentNode.querySelector(".label-holder")
    .style.backgroundColor;
  let rgbTab = currentColor
    .match(/[0-9]{0,3}/gm)
    .filter((elem) => elem != "")
    .map((element) => parseInt(element));
  document.querySelector("#colorInput").value = rgbToHex(
    rgbTab[0],
    rgbTab[1],
    rgbTab[2]
  );
  document.querySelector(".modal-footer").innerHTML = `
                <button type="button" class="btn btn-primary" onclick="modifyParameters(${index})" data-bs-dismiss="modal">Save changes</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                `;
}

function modifyParameters(index) {
  let changeColor = hexToRgb(document.querySelector("#colorInput").value);
  document
    .querySelectorAll(".settings")
    [index].parentNode.parentNode.querySelector(
      ".label-holder"
    ).style.backgroundColor = `rgb(${changeColor.r}, ${changeColor.g}, ${changeColor.b})`;

  document.querySelector("#colorInput").value;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
