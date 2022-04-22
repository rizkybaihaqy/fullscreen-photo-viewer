import { doNothing } from "./events/doNothing";
import { previewFileOn } from "./events/previewFile";

import "./index.css";

export function init() {
  const dropbox = document.getElementById("dropbox");
  const preview = document.getElementById("preview");

  dropbox.addEventListener("dragenter", doNothing, false);
  dropbox.addEventListener("dragover", doNothing, false);
  dropbox.addEventListener("drop", previewFileOn(preview), false);
}

init();
