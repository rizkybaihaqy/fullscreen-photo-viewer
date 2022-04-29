function doNothing(e: Event) {
  e.stopPropagation();
  e.preventDefault();
}

export default doNothing;
