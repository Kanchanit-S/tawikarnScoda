const tawikarnContext = require.context(
  "../assets/images/Tawikarn",
  true,
  /\.(bmp|gif|jpe?g|png|svg|webp|avif)$/
);

export default function loadImage(path) {
  if (path.startsWith("Tawikarn/")) {
    return tawikarnContext("./" + path.replace("Tawikarn/", ""));
  }
  return path;
}
