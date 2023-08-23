// getting all the elements

let serialDisplayer = document.getElementsByTagName("span")[0];
let buttonGenerator = document.getElementsByTagName("button")[0];

buttonGenerator.onclick = function () {
  // the process
  let testChar = "a1d2b3c4e5f6g7h8i9j1k2l3m4n5o6ABCDEF@$%&";
  let serialLength = 10;
  let theSerial = "";
  for (let i = 0; i < serialLength; i++) {
    let randomNum = Math.trunc(Math.random() * testChar.length);
    theSerial += testChar[randomNum];
  }
  // testing
  //   console.log(theSerial);
  //   console.log(theSerial.length);
  //! inserting generated text
  serialDisplayer.textContent = theSerial;
};
