export default function generateRandomString(length) {
  var text = '';

  var charset = 'abcdefghijklmnopqrstuvwxyz0123456789_';

  for (var i = 0; i < length; i++)
  {text += charset.charAt(Math.floor(Math.random() * charset.length));}

  return text;
};
