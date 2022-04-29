import previewFileOn from "./events/previewFile";
import doNothing from "./events/doNothing";

import "./index.css";

function init() {
  const dropbox = document.getElementById("dropbox");
  const preview = document.getElementById("preview");

  if (!dropbox || !preview) return;

  dropbox.addEventListener("dragenter", doNothing, false);
  dropbox.addEventListener("dragover", doNothing, false);
  dropbox.addEventListener("drop", previewFileOn(preview), false);
}

init();
