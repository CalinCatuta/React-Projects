// Media resize
export const resizeImage = (imageUrl, size) => {
  if (!imageUrl) return null;
  return imageUrl.match(/media\/(screenshots|games)/)
    ? imageUrl.replace("/media/", `/media/resize/${size}/-/`)
    : imageUrl;
};

// I made this to resize the image bcs the img from the API is 4k
// And this function let me pass in the size the px i want but its need to be common png size 640 , 800 and 1024  pixels
