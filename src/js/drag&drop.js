function dragstart_handler(ev) {
  console.log("dragStart");
  var dti = ev.dataTransfer.items;
  if (dti === undefined || dti == null) {
    console.log("Browser does not support DataTransferItem interface");
    return;
  }
  // Change the source element's background color to signify drag has started
  // Add the id of the drag source element to the drag data payload so
  // it is available when the drop event is fired
  dti.add(ev.target.id, "text/plain");
  // Tell the browser both copy and move are possible
  ev.effectAllowed = "copyMove";
}

function dragover_handler(ev) {
  // console.log("dragOver");
  var dti = ev.dataTransfer.items;
  if (dti === undefined || dti == null) {
    console.log("Browser does not support DataTransferItem interface");
    return;
  }
  // Change the target element's border to signify a drag over event
  // has occurred
  ev.preventDefault();
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var dti = ev.dataTransfer.items;
  if (dti === undefined || dti == null) {
    console.log("Browser does not support DataTransferItem interface");
    return;
  }
  // Get the id of the drag source element (that was added to the drag data
  // payload by the dragstart event handler). Even though only one drag item
  // was explicitly added, the browser may include other items so need to search
  // for the plain/text item.
  for (var i = 0; i < dti.length; i++) {
    // console.log(
    //   "Drop: item[" +
    //     i +
    //     "].kind = " +
    //     dti[i].kind +
    //     " ; item[" +
    //     i +
    //     "].type = " +
    //     dti[i].type
    // );
    if (dti[i].kind == "string" && dti[i].type.match("^text/plain")) {
      // This item is the target node
      dti[i].getAsString(function (id) {
        // Only Move the element if the source and destination ids are both "move"
        // if (ev.target.classList.contains("sort"))
        ev.target.appendChild(document.getElementById(id));
      });
    }
  }
}
function dragend_handler(ev) {
  console.log("dragEnd");
  var dti = ev.dataTransfer.items;
  if (dti === undefined || dti == null) {
    console.log("Browser does not support DataTransferItem interface");
    return;
  }
  // Restore source's border
  // ev.target.style.border = "solid black";
  // Remove all of the items from the list.
  dti.clear();
}
