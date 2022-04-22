export function doNothing(e: Event) {
  e.stopPropagation();
  e.preventDefault();
}
