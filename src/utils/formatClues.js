export const formatClues = (clueData) => {
  console.log(clueData)
  let cleanedClues = [];
  clueData.forEach(clue => {
    cleanedClues.push({
      answer: cleanAnswer(clue.answer),
      category: clue.category.title,
      hasAnsweredCorrectly: false,
      id: clue.id,
      question: clue.question || "API question format inconsistency" // Invalid questions are gathered from this API sometimes :(
    });
  });
  return cleanedClues;
}

// Remove html tags from answers to avoid printing... some have <i> tags
const cleanAnswer = (answer) => {
  return answer.replace( /(<([^>]+)>)/ig, '')
}
