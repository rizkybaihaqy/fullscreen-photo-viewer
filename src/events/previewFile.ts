import { toBase64 } from "../utils/toBase64";

export const previewFileOn =
  (container: HTMLElement) => async (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    container.style.display = "block";

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.startsWith("image/")) {
        continue;
      }

      const img = document.createElement("img");
      container.appendChild(img);

      const src = await toBase64(file);
      img.src = src;
    }
  };
