"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _doNothing = require("./events/doNothing");

var _previewFile = require("./events/previewFile");

function init() {
  var dropbox = document.getElementById("dropbox");
  var preview = document.getElementById("preview");
  dropbox.addEventListener("dragenter", _doNothing.doNothing, false);
  dropbox.addEventListener("dragover", _doNothing.doNothing, false);
  dropbox.addEventListener("drop", (0, _previewFile.previewFileOn)(preview), false);
}

init();
