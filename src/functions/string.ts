/**
 * @author Daniel Ortega
 * @type function
 * @param {string} text - text that will be formatted
 * @description takes a text and let just the first char uppercased
 * */
export const capitalizeText = (text: string = '') =>
  text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);

/**
 * @author Daniel Ortega
 * @type function
 * @param {string} text - text that will be formatted
 * @description takes a text and change to uppercase all words first letter
 * */
export const capitalizeWord = (text: string = '') =>
  text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/**
 * @author Daniel Ortega
 * @type function
 * @param {string} query - query to search
 * @param {string} text - the text to search coincidences
 * @description search coincidences in a text fragment and wrap results in a span
 * */
export const highlighter = (query: string = '', text: string = '') => {
  const regexp = new RegExp(query, 'gi');
  const output = text.replace(
    regexp,
    (query) => `<span class="highlighted-text">${query}</span>`,
  );

  return output;
};

/**
 * @author Daniel Ortega
 * @type function
 * @param {string} text - the text that will be delimited
 * @param {number} maxLength - the max leng of output
 * @description search coincidences in a text fragment and wrap results in a span
 * */
export const ellipsis = (text: string = '', maxLength: number = 5) =>
  text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

/**
 * @author Daniel Ortega
 * @type function
 * @param {number} length - the max leng of output
 * @description generate random string with ginen length
 * */
export const randomString = (length: number = 10) =>
  Array(length)
    .fill(0)
    .map(() => Math.random().toString(36).charAt(2))
    .join('');
