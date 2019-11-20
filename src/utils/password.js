function returnRand() {
  var randomization = Math.random().toString();
  var lengthNumbers = randomization.length;
  var sort = randomization.substring(lengthNumbers, lengthNumbers - 1);
  return sort;
}
// Gera uma senha simples
export default function generatePassword() {
  var retorno = "password";
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  retorno =
    letters[returnRand()].toUpperCase() +
    letters[returnRand()] +
    letters[returnRand()] +
    returnRand() +
    returnRand() +
    returnRand();
  return retorno;
}
