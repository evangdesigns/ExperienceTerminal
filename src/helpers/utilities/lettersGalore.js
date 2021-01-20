const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-™®";
const alphaArray = alphabet.split('');

const alphabetSoup = (ltr) => {
  let result = alphaArray.indexOf(ltr)
  return result;
}

const flip = (ltr, newLtr) => {
  const oldLI = alphabetSoup(ltr);
  const newLI = alphabetSoup(newLtr);
  if (newLI > oldLI) {
    //start at `oldL` and loop through each letter in `alphaArray` till `newL` is reached
    do {
      this.setState({ letter: alphaArray[oldLI + 1] })
    }
    while (letter !== newLI);
  } else if (newLI < oldLI) {
    do {
      this.setState({ letter: alphaArray[oldLI + 1] })
    }
    while (letter !== newLI);
    //start at `oldL` and loop through each letter in AlphaArray till `alphaArray.length` is reached, then start at `alphaArray[0]` and loop through each letter till `newL` is reached
  }

};

export { flip };