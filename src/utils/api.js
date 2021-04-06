// fetch 6 categories, then get questions based on those categories
export const fetchGameData = async () => {
  const categories = await fetchCategories();
  let gameQuestions = [];
  await Promise.all(
    categories.map(async category => {
      let response = await fetch(`https://jservice.io/api/clues?category=${category.id}`);
      response = await response.json();
      response.forEach((question, i) => {
        if (i <= 4) {
          gameQuestions.push(question);
        }
      });
    }));
// randomize questions - turn off for Qs of same category all together.
  return shuffleQuestions(gameQuestions);
}

const fetchCategories = async () => {
  const randomOffset = Math.random() * (29) + 1;
  let response = await fetch(`https://jservice.io/api/categories?count=6&offset=${randomOffset}`);
  response = await response.json();
  return response;
}

function shuffleQuestions(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


// Not it use - fetches 30 random questions

// export const fetchClues = async () => {
//   let response = await fetch("https://jservice.io/api/random?count=30");
//   response = await response.json();
//   return response;
// }
