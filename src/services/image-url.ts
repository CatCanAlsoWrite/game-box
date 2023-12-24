import noImage from "../assets/no-image.png";

export const getCroppedImageUrl = (url: string) => {
  // if (!url) return "";
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length; //position of '/' in "media/"
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
