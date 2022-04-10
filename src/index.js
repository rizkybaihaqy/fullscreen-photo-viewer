const dropbox = document.getElementById("dropbox");
const preview = document.getElementById("preview");

dropbox.addEventListener(
  "dragenter",
  (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  false
);
dropbox.addEventListener(
  "dragover",
  (e) => {
    e.stopPropagation();
    e.preventDefault();
  },
  false
);
dropbox.addEventListener(
  "drop",
  (e) => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
  },
  false
);

function handleFiles(files) {
  console.log(files);
  preview.style.display = "block";

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
