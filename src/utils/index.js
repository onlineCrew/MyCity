export const convertObjToArray = obj => {
  return Object.keys(obj).reduce((array, key) => {
    return [...array, obj[key]];
  }, []);
};

export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export const replaceDiacriticalMarks = string => {
  return string
    .toLowerCase()
    .replaceAll('ą', 'a')
    .replaceAll('ć', 'c')
    .replaceAll('ę', 'e')
    .replaceAll('ł', 'l')
    .replaceAll('ń', 'n')
    .replaceAll('ó', 'o')
    .replaceAll('ś', 's')
    .replaceAll('ź', 'z')
    .replaceAll('ż', 'z');
};

export const containsAnyLetters = str => {
  return /[a-zA-Z]/.test(str);
};
