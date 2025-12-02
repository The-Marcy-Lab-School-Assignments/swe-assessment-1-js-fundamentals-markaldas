/*
  Write your functions here!
  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petBreed === undefined || petName === undefined) {
    console.log(`Missing information. Please provide a valid pet.`)
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else if (petBreed) {
    console.log(`What an...interesting pet.`)
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  if (firstNum !== secondNum) {
    for (let i = firstNum; i < secondNum; i++) {
      console.log(i)
    }
  } else {
    return
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {

  for (let i = 0; i < str.length; i++) {

    console.log(`${str.toUpperCase()[i]}!`)
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const objOfLetters = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (/[^a-zA-Z]/.test(letter)) {
      objOfLetters.neither += 1
    }
    else if (letter === letter.toLowerCase()) {
      objOfLetters.lowercase += 1
    }
    else if (letter === letter.toUpperCase()) {
      objOfLetters.uppercase += 1
    }
  }
  return objOfLetters;
}

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedy = [];

  for (const gnome of gnomes) {
    if (gnome.stolenDecorations.length > 1) {
      greedy.push(gnome.name);
    }
  }

  return greedy;

};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
