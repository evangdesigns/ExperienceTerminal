const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-";
const alphaArray = alphabet.split('');

const alphabetSoup = (ltr) => {
  const result = alphaArray.filter((a) => a === ltr);
  //alphabet.indexOf(ltr)
  return result;
}

const flip = (ltr, newLtr) => {
  const startPoint = alphabetSoup(ltr);
  const endPoint = alphabetSoup(newLtr);

  //go to that index of the startPoint in the alphaArray
  //start the loop
  //if newLetter doesn't match through the end start at the beginning of the alphaArray
  do {
    alphaArray.forEach((l) => {
      this.setState({ letter: l})
    });
  }
  while (ltr !== endPoint)
};

export { flip };