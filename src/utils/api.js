export const fetchGameData = async () => {
  const categories = await fetchCategories();
  let gameQuestions = [];
  await Promise.all(
    categories.map(async category => {
      let response = await fetch(`https://jservice.io/api/clues?category=${category.id}`)
      response = await response.json();
      response.forEach((question, i) => {
        if (i <= 4) {
          gameQuestions.push(question)
        }
      });
    }))
  return gameQuestions;
}

const fetchCategories = async () => {
  let response = await fetch("https://jservice.io/api/categories?count=6");
  response = await response.json();
  console.log(response)
  return response;
}

// Not it use - fetches 30 random questions
// Switched to gather 6 categories, then get questions from those categories

// export const fetchClues = async () => {
//   let response = await fetch("https://jservice.io/api/random?count=30");
//   response = await response.json();
//   return response;
// }
