//Ensures that the message, however long or short, is always centered with the number of letters available.

const splitTheDifference = (message, letterCount) => {
  const msgLength = message.length;
  if  (letterCount === msgLength) {
    return message;
  } else if (letterCount > msgLength) {
    const count = (letterCount - msgLength)
    const diff = (letterCount - msgLength)/2;
    const newDiff = Math.round((letterCount - msgLength)/2);
    //equal to 1
    if (count === 1){
      message.push(' ');
      message.unshift(' ')
    //even
    } else if (count % 2 === 0) {
      for (var i = 0; i < diff; i++) {
        message.push(' ');
        message.unshift(' ')
      }
    //odd
    } else if (count % 2 === 1) {
      for (i = 0; i < newDiff; i++) {
        message.unshift(' ');
      };
      for (i = 0; i < (newDiff-1); i++) {
        message.push(' ');
      }
    }
    return message;
  } else if (letterCount < msgLength) {
    const diff = msgLength - letterCount ;
    for (i = 0; i < diff; i++) {
      message.pop();
    }
    return message
  }
}

export { splitTheDifference };