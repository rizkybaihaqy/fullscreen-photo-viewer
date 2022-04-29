import toBase64 from "../utils/toBase64";

const previewFileOn = (container: HTMLElement) => async (e: DragEvent) => {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  if (!dt) return;

  const { files } = dt;

  // eslint-disable-next-line no-param-reassign
  container.style.display = "block";

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];

    if (!file.type.startsWith("image/")) {
      const img = document.createElement("img");
      container.appendChild(img);

      // eslint-disable-next-line no-await-in-loop
      const src = await toBase64(file);
      img.src = src;
    }
  }
};

export default previewFileOn;
