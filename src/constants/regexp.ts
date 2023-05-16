export const containsUppercase = new RegExp(/^(?=.*[A-Z])/, 'g');
export const containsLowercase = new RegExp(/^(?=.*[a-z])/, 'g');
export const containsNumber = new RegExp(/^(?=.*[0-9])/, 'g');
export const containsSymbol = new RegExp(
  /^(?=.*[~`!@#$%^&*()--+={}\[\]|:;"'<>,.?_])/,
  'g',
);
export const string = /^[a-zA-Z ]$/;
export const cardNumber =
  /^(4\d{3}-?\d{4}-?\d{4}-?\d{4}|5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4})$/;
export const validity = /(0[1-9]|1[0-2])\/[0-9]{2}/;
export const ccv = /^\d{3}$/;
export const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
export const number = /^[0-9]+$/;
export const letters = /^[a-zA-Z_áéíóúñ\s]*$/;
export const alphanumeric = /^[a-zA-Z0-9]+$/;
export const latinLetters =
  /^[0-9a-zA-Záéíóúñ_\s\`\´\.\,\-\&\$\(\)\?\¿\!\¡\%\;\:]+$/;
export const password = /^([a-z]+[0-9]+)|([0-9]+[a-z]+)/i;
export const url =
  /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,6})?([\&\%\¿\¡\$\"\'\.\(\)\%\=\!\?\#\.\-\w\/_]+)$/i;
export const localhost = /^http:\/\/(localhost|127\.0\.0\.1)/;
export const zip_code = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
export const NIF = /^\d{8}[a-zA-Z]{1}$/;
export const CIF = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/;
export const NIE = /^[XxTtYyZz]{1}[0-9]{7}[a-zA-Z]{1}$/;
export const VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
export const MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
export const date = /^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/;
export const floatRegex = /[-+]?([0-9]*\.[0-9]+|[0-9]+)/;
export const number1to50Regex = /(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)/gm;
export const creditCardRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
export const usernameRegex = /^[a-z0-9_-]{3,16}$/;
export const passwordRegex = /^[a-z0-9_-]{6,18}$/;
export const phoneNumber = /^[0-9-()+]{3,20}/;
export const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/gm;
export const dateMMDDYYYRegex =
  /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
export const urlRegex =
  /^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
export const domainRegex =
  /(.*?)[^w{3}\.]([a-zA-Z0-9]([a-zA-Z0-9\-]{0,65}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/gim;
export const imageRegex = /([^\s]+(?=\.(jpg|gif|png))\.\2)/gm;
export const imgTagsRegex = /<img.+?src=\"(.*?)\".+?>/gi;
export const imgPNG = /<img.+?src=\"(.*?.png)\".+?>/gi;
export const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
export const hexRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
export const htmlTagRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export const jsTagsRegex = /<script.+?src=\"(.+?\.js(?:\?v=\d)*).+?script>/gi;
export const cssTagsRegex = /<link.+?href=\"(.+?\.css(?:\?v=\d)*).+?>/gi;
export const youtubeId = /^[a-zA-Z0-9_-]{11}$/;
// Cheers to: https://gist.github.com/afeld/1254889
export const youtubeUrl =
  /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
// Cheers to: https://stackoverflow.com/questions/12387389/how-to-parse-dailymotion-video-url-in-javascript
export const dailymotionUrl =
  /^(?:(?:http|https):\/\/)?(?:www.)?(?:dailymotion\.com|dai\.ly)\/(?:(?:video\/([^_]+))|(hub\/([^_]+)|([^\/_]+)))$/;
// Cheers to: https://regex101.com/r/uW5oK9/5
export const vimeoUrl =
  /(?:http|https)?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|)(\d+)(?:|\/\?)/;
