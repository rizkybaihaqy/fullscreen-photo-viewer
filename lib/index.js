"use strict";

var dropbox = document.getElementById("dropbox");
var preview = document.getElementById("preview");
dropbox.addEventListener("dragenter", function (e) {
  e.stopPropagation();
  e.preventDefault();
}, false);
dropbox.addEventListener("dragover", function (e) {
  e.stopPropagation();
  e.preventDefault();
}, false);
dropbox.addEventListener("drop", function (e) {
  e.stopPropagation();
  e.preventDefault();
  var dt = e.dataTransfer;
  var files = dt.files;
  handleFiles(files);
}, false);

function handleFiles(files) {
  console.log(files);
  preview.style.display = "block";

  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    var reader = new FileReader();

    reader.onload = function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    }(img);

    reader.readAsDataURL(file);
  }
}
