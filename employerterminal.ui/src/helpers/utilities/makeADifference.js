const splitTheDifference = (message, letterCount) => {
//1. Get length of message
  const msgLength = message.length;
//2. If lengths are equal just return the message.
  if  (letterCount === msgLength) {
    return message;
//3. If letterCount is greater than message length,
  //it takes the difference, divides it by two,
  //and adds the 'split' difference in the form of spaces (' ') to either end of the message array.
  } else if (letterCount > msgLength) {
    const diff = (letterCount - msgLength)/2;
    var i = 0;
    //  if even: add difference in spaces to either end of length.
    if (diff % 2 === 0) {
      for (i = 0; i < diff; i++) {
        message.push(' ');
        message.unshift(' ')
      }
    //  if odd: add difference to end && add -1 of difference to the beginning
    } else {
      for (i = 0; i < diff; i++) {
        message.push(' ');
      }
      const newDiff = diff - 1;
      for (i = 0; i < newDiff; i++) {
        message.unshift(' ');
      }
    }
    return message;
//4. If letterCount length is less than message letter length,
  // takes the difference and remove that number of characters from the end of the message.
  } else if (letterCount < msgLength) {
    const diff = msgLength - letterCount ;
    for (i = 0; i < diff; i++) {
      message.pop();
    }
    return message;
  }
}

export { splitTheDifference };