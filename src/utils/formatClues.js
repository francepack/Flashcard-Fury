export const formatClues = (clueData) => {
  console.log(clueData)
  let cleanedClues = [];
  clueData.forEach(clue => {
    cleanedClues.push({
      answer: cleanAnswer(clue.answer),
      category: clue.category.title,
      hasAnsweredCorrectly: false,
      id: clue.id,
      question: clue.question || "API question format inconsistency"
      // Sometimes, invalid questions are gathered from this API :(
    });
  });
  return cleanedClues;
}

// Some answers are enclosed with <i> tags which we remove to avoid printing
const cleanAnswer = (answer) => {
  return answer.replace( /(<([^>]+)>)/ig, '')
}
