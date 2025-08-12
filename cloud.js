const myPara = document.getElementById("myParagraph");

function findOccuredWord(para) {
  const spltArr = para.toLowerCase().split(" ");
  const filteredArr = spltArr.filter((word) => word !== "");
  const newArr = [];

  const wordObj = [];

  let counter = 0;
  const wordsDup = [...new Set(filteredArr)];

  for (let i = 0; i < wordsDup.length; i++) {
    for (let y = 0; y < filteredArr.length; y++) {
      if (filteredArr[y].includes(wordsDup[i])) {
        counter++;
      }
    }
    wordObj.push({ word: wordsDup[i], counter: counter });

    counter = 0;
  }

  const srtArr = wordObj.sort((a, b) => b.counter - a);
  console.log(srtArr[srtArr.length - 1]);
}

findOccuredWord(myPara.textContent);
// //   console.log(joindedArr);

//   for (let i = 0; i < wordsDup.length; i++) {
//     //   console.log(joindedArr.match(/\b wordsDup[i] \b/gi).length);
//     console.log(wordsDup[i]);
//   }

//   console.log(wordsDup);
