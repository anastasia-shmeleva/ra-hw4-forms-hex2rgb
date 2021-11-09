export default function convertColor(color) {
  /* Check for # infront of the value, if it's there, strip it */

  if(color.substring(0,1) === '#') {
     color = color.substring(1);
   }

  let rgbColor = {};

  /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
  rgbColor.r = parseInt(color.substring(0,2),16);
  rgbColor.g = parseInt(color.substring(2,4),16);
  rgbColor.b = parseInt(color.substring(4),16);

  return rgbColor;
 }