let randomWords = ["cat", "dog", "fish", "turtle", "cow", "puppy", "lion", "main coon"];

function generateSentence (arrWords, numWords) {
	let sentence = "";
	for (let i = 0; i < numWords; i++) {
  	sentence += ` ${ranElm(randomWords)}`;
  }
  console.log(sentence.trim());
	return sentence.trim();
}


function ranElm (words) {
	let num = Math.floor(Math.random() * words.length);
  return words[num];
}

//ranElm(randomWords);
let randomSentence = generateSentence(randomWords, 4);

function countLetters (sentence) {
	let words = sentence.trim();
  let countObj = {};
  for (let i = 0; i < words.length; i++) {
  	if (countObj[words[i]]) {
    	countObj[words[i]]++;
    } else {
    countObj[words[i]] = 1;
    }
  }
  console.log(countObj);
  return countObj;
}

function maxLetter (countObj) {
	let max = 0;
  let letter = "";
  Object.keys(countObj).forEach(key => {
  let letterCount = countObj[key];
  	countObj[letterCount] = max;
    if (max < letterCount) {
    	max = letterCount;
      letter = key;
    }
  })
  return letter;
  
}

function minLetter (countObj) {
	let min = 0;
  let letter = "";
  Object.keys(countObj).forEach(key => {
  let letterCount = countObj[key];
  	countObj[letterCount] = min;
    if (min > letterCount) {
    	min = letterCount;
      letter = key;
    }
  })
  return letter;
  
}

let max = maxLetter (countLetters(randomSentence));
let min = maxLetter (countLetters(randomSentence));
console.log(max);
countLetters (randomSentence);










