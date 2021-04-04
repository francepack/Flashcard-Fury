export const formatClues = (clueData) => {
  let cleanedClues = [];
  clueData.forEach(clue => {
    cleanedClues.push({
      answer: clue.answer,
      category: clue.category.title,
      hasAnsweredCorrectly: false,
      id: clue.id,
      question: clue.question
    });
  });
  return cleanedClues;
}
